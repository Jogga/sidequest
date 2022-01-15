import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function ResetPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (emailRef.current.value === '') {
      return setError('Enter an email');  
    }
    try {
      setError('')
      setMessage('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
    } catch {
      setError('Failed to reset password')
    }

    setMessage('Email sent. Check your inbox for further instructions.')
    setLoading(false)
  }
  return (
    <div>
      <h1>Reset password</h1>
      {error && <p>{ error }</p>}
      {message && <p>{ message }</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="forgot-password-email">Email</label>
        <input type="email" name="" id="forgot-password-email" ref={emailRef} />
        <button type="submit" disabled={loading}>Reset password</button>
      </form>
      <p>
        <Link to="/login">Login</Link> <Link to="/signup">Signup</Link>
      </p>
    </div>
  )
}
