import React, { useEffect, useState } from 'react'
import Header from './Header'
import { db } from '../firebase'
import { Link } from 'react-router-dom';
import { getDoc, doc, query, collection, getDocs, where } from "firebase/firestore"; 
import { useAuth } from '../contexts/AuthContext';

export default function Parties() {
  const { currentUser } = useAuth()
  let [parties, setParties] = useState([])
  let [error, setError] = useState()
  let [loading, setLoading] = useState()

  return (
    <div>
      <Header />
      <h1>Parties</h1>
    </div>
  )
}
