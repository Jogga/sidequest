import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from './Header';
import { db } from '../firebase'
import { query, getDocs, collection, where } from "firebase/firestore"; 
import PartyMembers from './PartyMembers';

export default function Party() {
  let params = useParams();
  let partyMembersRef = collection(db, "characters")
  const charactersQuery = query(partyMembersRef, where("party", "==", params.partyId));
  const [partyMembers, setPartyMembers] = useState()
  let [error, setError] = useState("")

  useEffect( async () => {
    try {
      let partyData = await getDocs(charactersQuery)
      setPartyMembers(partyData)
    } catch (error) {
      console.log(error)
      setError("Could not load character")
    }
  }, [])

  return (
    <div>
      <Header />
      <h1>Party</h1>
      { partyMembers &&
        <PartyMembers partyMembers={partyMembers} />
      }
    </div>
  )
}