import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
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
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError('Failed to log in')
    }

    setLoading(false)
  }
  return (
    <div>
      <h1>Login</h1>
      {error && <p>{ error }</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email</label>
        <input type="email" name="" id="login-email" ref={emailRef} />
        <label htmlFor="login-password">Password</label>
        <input type="password" name="" id="login-password" ref={passwordRef}/>
        <button type="submit" disabled={loading}>Log in</button>
      </form>
      <p>Already have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  )
}
