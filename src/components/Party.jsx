import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'

export default function Party() {
  let params = useParams();
  return (
    <div>
      <Header />
      <h1>Party {params.partyId}</h1>
    </div>
  )
}