import React, { useEffect, useState } from 'react'
import Header from './Header'
import { db } from '../firebase'
import { query, collection, getDocs, where } from "firebase/firestore"; 
import { useAuth } from '../contexts/AuthContext';
import CharacterList from './CharacterList';
import Page from './Page';

export default function Characters() {
  const { currentUser } = useAuth()
  let [characters, setCharacters] = useState([])
  let [error, setError] = useState()
  let [loading, setLoading] = useState()

  useEffect(() => {
    (async () => {
      console.log("effect")
      setLoading(true)
      try {
        const charactersQuery = query(collection(db, "characters"), where("player", "==", currentUser.uid))
        const charactersCollection = await getDocs(charactersQuery)
        let cs = []
        charactersCollection.forEach((doc) => {
          let character = {}
          character.name = doc.get("name")
          character.player = doc.get("player")
          character.id = doc.id
          character.life = {}
          character.life.maximum = doc.get("lifePoints.maximum")
          character.life.current = doc.get("lifePoints.current")
          cs.push(character)
        })
        setCharacters(cs)
      } catch (error) {
        console.log(error)
        setError("Could not load character")
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <>
      <Header />
      <Page>
        { loading && 
          <p>Loading…</p>
        }
        {
          error &&
          <p>Sorry, an error occurred. Please reload the page.</p>
        }
        { characters
          ? <CharacterList characters={characters} unlocked={true} />
          : <p>You do not have any playable characters</p>
        }
      </Page>
    </>
  )
}
