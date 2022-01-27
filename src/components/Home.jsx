import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Header from './Header';

export default function Home() {
  const { currentUser } = useAuth()

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <p>
        {currentUser.email}
      </p>
      <p>
      </p>
    </div>
  )
}
