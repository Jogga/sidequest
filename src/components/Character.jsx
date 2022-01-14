import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Character() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div>
      <h1>Character</h1>
      {currentUser.email}
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}
