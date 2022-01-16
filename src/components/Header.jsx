import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/profile">Profile</Link> 
        </li>
        <li>
          <Link to="/characters"> Characters</Link>
        </li>
        <li>
          <Link to="/parties"> Parties</Link>
        </li>
      </ul>
    </nav>
  )
}
