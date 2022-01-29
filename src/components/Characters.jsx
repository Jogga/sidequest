import React, { useEffect, useState } from 'react'
import Header from './Header'
import { db } from '../firebase'
import { Link } from 'react-router-dom';
import { query, collection, getDocs, where } from "firebase/firestore"; 
import { useAuth } from '../contexts/AuthContext';
import CharacterList from './CharacterList';

export default function Characters() {
  const { currentUser } = useAuth()
  let [characters, setCharacters] = useState([])
  let [error, setError] = useState()
  let [loading, setLoading] = useState()

  useEffect(() => {
    (async () => {
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
  }, [currentUser])

  let characterListItems = characters.map(character => <li key={character.id}><Link to={character.id}>{character.name}</Link></li>)
  
  return (
    <div>
      <Header />
      <h1>Characters</h1>
      { loading && 
        <p>Loading…</p>
      }
      {
        error &&
        <p>Sorry, an error occurred. Please reload the page.</p>
      }
      { characters &&
        <CharacterList characters={characters} unlocked={true} />
      }
    </div>
  )
}
