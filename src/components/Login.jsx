import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { db } from '../firebase'
import { doc, getDoc } from "firebase/firestore"; 

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    setError("")
    setLoading(true)

    try {
      let userCredential = await login(emailRef.current.value, passwordRef.current.value)
      let data = await getDoc(doc(db, "users", userCredential.user.uid))

      if(data.get("isStoryRunner")) {
        if(data.get("parties")[0]) {
          navigate("/parties/" + data.get("parties")[0])
        }
      }
      else {
        if(data.get("characters")[0]) {
          navigate("/characters/" + data.get("characters")[0])
        }
      }
    } catch (error) {
      console.log(error)
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
        <input type="email" name="" id="login-email" ref={emailRef} required />
        <label htmlFor="login-password">Password</label>
        <input type="password" name="" id="login-password" ref={passwordRef} required/>
        <button type="submit" disabled={loading}>Log in</button>
      </form>
      <p><Link to="/forgot-password">Forgot password?</Link></p>
      <p>Already have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  )
}
