import { useEffect, useState } from 'react'
import Header from '../Header'
import { db } from '../../firebase'
import { query, collection, getDocs, where } from "firebase/firestore"; 
import { useAuth } from '../../contexts/AuthContext';
import CharacterList from '../CharacterList';
import Page from '../Page';
import { Character } from '../../models/Character';

export default function CharactersPage() {
  const { currentUser } = useAuth()
  let [characters, setCharacters] = useState<Character[]>([])
  let [error, setError] = useState<String | null>()
  let [loading, setLoading] = useState<Boolean | null >()

  useEffect(() => {
    (async () => {
      console.log("effect")
      setLoading(true)
      try {
        const charactersQuery = query(collection(db, "characters"), where("player", "==", currentUser.uid))
        const charactersCollection = await getDocs(charactersQuery)
        let cs: Character[] = []
        charactersCollection.forEach((doc) => {
          let character = new Character(doc)
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
