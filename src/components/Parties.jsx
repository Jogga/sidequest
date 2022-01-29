import React, { useEffect, useState } from 'react'
import Header from './Header'
import { db } from '../firebase'
import { query, collection, getDocs, where } from "firebase/firestore"; 
import { useAuth } from '../contexts/AuthContext';
import PartyList from './PartyList';
import Page from './Page';

export default function Parties() {
  const { currentUser } = useAuth()
  let [hostingParties, setHostingParties] = useState([])
  let [playingParties, setPlayingParties] = useState([])
  let [error, setError] = useState()
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const hostingQuery = query(collection(db, "parties"), where("host", "==", currentUser.uid))
        const playingQuery = query(collection(db, "parties"), where("players", "array-contains", currentUser.uid))

        const hostingPartiesSnapshot = await getDocs(hostingQuery)
        const playingPartiesSnapshot = await getDocs(playingQuery)
        let hosting = []
        let playing = []

        function parsePartyDocs(docs, array) {
          docs.forEach((doc) => {
            let party = {}
            party.name = doc.get("name")
            party.id = doc.id
            party.players = doc.get("players").length
            array.push(party)
          })
        }
        
        parsePartyDocs(hostingPartiesSnapshot, hosting)
        parsePartyDocs(playingPartiesSnapshot, playing)
        setHostingParties(hosting)
        setPlayingParties(playing)
      } catch (error) {
        console.log(error)
        setError("Could not load parties")
      } finally {
        setLoading(false)
      }
    })()
  }, [currentUser])

  return (
    <>
      <Header />
      <Page>
        { error && 
          <p>{error}</p>
        }
        { loading &&
          <p>Loading…</p>
        }
        { !loading &&
          <>
            <PartyList title="Hosting" parties={hostingParties} />
            <PartyList title="Playing" parties={playingParties} />
          </>
        }
      </Page>
    </>
  )
}
