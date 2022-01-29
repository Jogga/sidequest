import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Header from './Header'
import Page from './Page'


export default function Profile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { currentUser, updateEmail, updatePassword, logout } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    setError("")
    setLoading(true)

    const promises = []
    if( currentUser.email !== emailRef.current.value) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if( passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises).then(() => {
      setMessage("Profile updated")
    }).catch(() => {
      setError("Failed to update profile.")
    }).finally(() => {
      setLoading(false)
    })
  }

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
    <>
      <Header />
      <Page>
        <h1>Profile</h1> 
        {error && <p>{ error } Please log in and try again.</p>}
        {message && <p>{ message }</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="profile-email">Email</label>
          <input type="email" name="" id="profile-email" ref={emailRef} defaultValue={ currentUser.email }/>
          <label htmlFor="profile-password">Password</label>
          <input type="password" name="" id="profile-password" ref={passwordRef}/>
          <button type="submit" disabled={loading}>Update profile</button>
        </form>
        <div>
          <button onClick={handleLogout}>Log out</button>
        </div>
      </Page>
    </>
  )
}
