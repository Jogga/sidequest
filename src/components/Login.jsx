import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { db } from '../firebase'
import { doc, getDoc } from "firebase/firestore"
import styled from 'styled-components'
import { PrimaryButton } from './Button'
import { TextInput, TextInputField } from './Input'
import { Card } from './Card'
import { ReactComponent as Dice } from '../assets/dice-fills.svg'
import { SingInForm } from './SignInForm'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`

const LoginCard = styled(Card)`
  min-width: 360px;
  box-sizing: border-box;
  padding: 16px 24px;
`

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
    <Container>
      <Dice />
      <LoginCard>
        <h1>Login</h1>
        {error && <p>{ error }</p>}
        <SingInForm onSubmit={handleSubmit}>
          <TextInputField>
            <label htmlFor="login-email">Email</label>
            <TextInput type="email" name="" id="login-email" ref={emailRef} required />
          </TextInputField>
          <TextInputField>
            <label htmlFor="login-password">Password</label>
            <TextInput type="password" name="" id="login-password" ref={passwordRef} required/>
          </TextInputField>
          <PrimaryButton type="submit" disabled={loading}>Log in</PrimaryButton>
        </SingInForm>
        <p><Link to="/forgot-password">Forgot password?</Link></p>
      </LoginCard>
      <p>Already have an account? <Link to="/signup">Sign up</Link></p>
    </Container>
  )
}
