import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value === '') {
      return setError('Enter a password');  
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Sign up failed')
    }

    setLoading(false)
  }
  return (
    <div>
      <h1>Signup</h1>
      {error && <p>{ error }</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="signup-email">Email</label>
        <input type="email" name="" id="signup-email" ref={emailRef} />
        <label htmlFor="signup-password">Password</label>
        <input type="password" name="" id="signup-password" ref={passwordRef}/>
        <button type="submit" disabled={loading}>Sign up</button>
      </form>
      <p>Already have an account? Login</p>
    </div>
  )
}
