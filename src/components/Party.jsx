import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import { db } from '../firebase'
import { query, getDoc, getDocs, doc, collection, where } from "firebase/firestore"
import CharacterList from './CharacterList'
import Page from './Page'
import { useAuth } from '../contexts/AuthContext'

export default function Party() {
  let params = useParams()
  let { currentUser } = useAuth()
  const [party, setParty] = useState()
  let [error, setError] = useState("")
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      console.log("effect")
      try {
        setLoading(true)
        // Load party
        const partyRef = doc(db, "parties", params.partyId)
        let partyDoc = await getDoc(partyRef)
        let p = {}
        p.name = partyDoc.get("name")
        p.characterIds = partyDoc.get("characters")
        
        // Load host
        const hostRef = doc(db, "users", partyDoc.get("host"))
        let hostDoc = await getDoc(hostRef)
        let h = {}
        h.name = hostDoc.get("name")
        h.id = hostDoc.id
        p.host = h

        // Load characters
        const charactersQuery = query(collection(db, "characters"), where("party", "==", params.partyId))
        let charactersCollection = await getDocs(charactersQuery)
        let cs = []
        charactersCollection.forEach((doc) => {
          let character = {}
          character.name = doc.get("name")
          character.id = doc.id
          character.player = doc.get("player")
          character.life = {}
          character.life.maximum = doc.get("lifePoints.maximum")
          character.life.current = doc.get("lifePoints.current")
          cs.push(character)
        })
        p.characters = cs

        setParty(p)
      } catch (error) {
        console.log(error)
        setError("Could not load characters")
      } finally {
        setLoading(false)
      }
    })()
  }, [])


  return (
    <>
      <Header />
      <Page backNav={true}>
        { party && 
          <>
            <h1>{party.name}</h1>
            <h2>Hosted by {party.host.name}</h2>
            <CharacterList characters={party.characters} unlocked={party.host.id === currentUser.uid}/>
          </>
        }
      </Page>
    </>
  )
}