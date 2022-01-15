import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

export default function Character() {
  const { currentUser } = useAuth()

  return (
    <div>
      <h1>Character</h1>
      {currentUser.email}
      <p><Link to="/profile">Profile</Link></p>
    </div>
  )
}
