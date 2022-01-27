import React, { useEffect, useState } from 'react'
import Header from './Header'
import { db } from '../firebase'
import { Link } from 'react-router-dom';
import { getDoc, doc, query, collection, getDocs, where } from "firebase/firestore"; 
import { useAuth } from '../contexts/AuthContext';

export default function Characters() {
  const { currentUser } = useAuth()
  let [characters, setCharacters] = useState([])
  let [error, setError] = useState()
  let [loading, setLoading] = useState()

  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        
        // TODO: Only the user’s own characters appear here. Full party for story runner is visible in parties.
        // Party is also visible for non-story-runners, but they can not open the other characters.

        const userDoc = await getDoc(doc(db, "users", currentUser.uid))
        let q
        if(userDoc.get("isStoryRunner")) {
          const parties = userDoc.get("parties")
          q = query(collection(db, "characters"), where("party", "==", parties[0]))
        } else {
          q = query(collection(db, "characters"), where("user", "==", currentUser.uid))
        }
        const querySnapshot = await getDocs(q);
        let chars = []
        querySnapshot.forEach((doc) => {
          let character = {}
          character.name = doc.get("name")
          character.id = doc.id
          character.life = {}
          character.life.maximum = doc.get("lifePoints.maximum")
          character.life.current = doc.get("lifePoints.current")
          chars.push(character)
        });
        setCharacters(chars)
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
      <ul>
        {characterListItems}
      </ul>
    </div>
  )
}
