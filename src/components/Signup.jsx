import React, { useRef } from 'react'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <label htmlFor="signup-email">Email</label>
        <input type="email" name="" id="signup-email" ref={emailRef} />
        <label htmlFor="signup-password">Password</label>
        <input type="password" name="" id="signup-password" ref={passwordRef}/>
        <button type="submit">Sign up</button>
      </form>
      <p>Already have an account? Login</p>
    </div>
  )
}
