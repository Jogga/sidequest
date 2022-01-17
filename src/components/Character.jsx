import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from './Header';
import { db } from '../firebase'
import { doc, getDoc } from "firebase/firestore"; 
import Attributes from './Attributes';

export default function Character() {
  let params = useParams();
  let characterRef = doc(db, "characters", params.characterId)
  let [error, setError] = useState("")
  let [character, setCharacter] = useState()

  useEffect( async () => {
    try {
      let data = await getDoc(characterRef)
      setCharacter(data)
    } catch (error) {
      console.log(error)
      setError("Could not load character")
    }
  }, [])

  return (
    <div>
      <Header />
      {error && <p>{ error }</p>}
      <h1>{ character && character.get("name") }</h1>
      { character && 
        <Attributes attributes={character.get("attributes")} />
      }
      <p></p>
    </div>
  )
}