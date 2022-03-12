import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import { db } from '../../firebase'
import { query, getDoc, getDocs, doc, collection, where } from "firebase/firestore"
import CharacterList from '../CharacterList'
import Page from '../Page'
import { useAuth } from '../../contexts/AuthContext'
import { Party } from '../../models/Party'
import { Host } from '../../models/Host'
import { Character } from '../../models/Character'

type PartyParams = {
  partyId: string
}

export default function PartyPage() {
  const { partyId } = useParams<PartyParams>()
  let { currentUser } = useAuth()
  const [party, setParty] = useState<Party>()
  let [error, setError] = useState<string>("")
  let [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      console.log("effect")
      try {
        setLoading(true)

        if (!partyId) {           
          setError("No Party Id provided")
          return
        }

        // Load party
        const partyRef = doc(db, "parties", partyId)
        let partyDoc = await getDoc(partyRef)
        
        // Load host
        const hostRef = doc(db, "users", partyDoc.get("host"))
        let hostDoc = await getDoc(hostRef)
        let host = new Host(hostDoc)

        // Load characters
        const charactersQuery = query(collection(db, "characters"), where("party", "==", partyId))
        let charactersCollection = await getDocs(charactersQuery)
        let characters: Character[] = []
        charactersCollection.forEach((doc) => {
          let character = new Character(doc)
          characters.push(character)
        })

        setParty(new Party(partyDoc, host, characters))
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