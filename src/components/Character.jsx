import React from 'react'
import { useParams } from 'react-router-dom';
import Header from './Header';

export default function Character() {
  let params = useParams();
  return (
    <div>
      <Header />
      <h1>Character {params.characterId}</h1>
    </div>
  )
}