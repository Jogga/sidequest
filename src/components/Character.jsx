import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import { doc, getDoc } from "firebase/firestore"; 

// TODO: Consider if it makes sense to check for showrunner. 
// If true, go to a party view, if not true, go to a character view

export default function Character() {
  const { currentUser } = useAuth()
  const [error, setError] = useState("")
  const userDocRef = doc(db, "users", currentUser.uid)

  useEffect(() => {
    const getUser = async () => {
      const data = await getDoc(userDocRef)
      console.log(data)
    }

    getUser()
  })

  function handleAddDoc() {
    setError("")
  }

  return (
    <div>
      <h1>Character</h1>

      <button onClick={handleAddDoc}>Add doc</button>

      <p>
        {currentUser.email}
      </p>
      <p>
        {currentUser.uid}
      </p>
      <p><Link to="/profile">Profile</Link></p>
    </div>
  )
}
