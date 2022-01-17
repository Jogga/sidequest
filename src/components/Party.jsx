import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from './Header';
import { db } from '../firebase'
import { query, getDocs, collection, where } from "firebase/firestore"; 

export default function Party() {
  let params = useParams();
  let partyMembersRef = query(collection(db, "characters"));
  let [error, setError] = useState("")
  let [character, setCharacter] = useState()

  function printDocs(data) {
    data.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }

  useEffect( async () => {
    try {
      let partyData = await getDocs(partyMembersRef)
      printDocs(partyData)
    } catch (error) {
      console.log(error)
      setError("Could not load character")
    }
  }, [])

  return (
    <div>
      <Header />
      <h1>Party</h1>
    </div>
  )
}