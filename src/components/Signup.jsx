import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value === '') {
      return setError('Enter a password');  
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/");
    } catch {
      setError('Sign up failed')
    }

    setLoading(false)
  }
  return (
    <div>
      <h1>Sign up</h1>
      {error && <p>{ error }</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="signup-email">Email</label>
        <input type="email" name="" id="signup-email" ref={emailRef} required/>
        <label htmlFor="signup-password">Password</label>
        <input type="password" name="" id="signup-password" ref={passwordRef} required/>
        <button type="submit" disabled={loading}>Sign up</button>
      </form>
      <p>Already have an account? <Link to="/login">Log in</Link></p>
    </div>
  )
}
