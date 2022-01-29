import React from "react"
import { Link } from "react-router-dom"

function PartyListItem(props) {
  const id = props.id
  const name = props.name
  const players = props.players
  return(
    <li>
      <Link to={id}>
        <h3>{name}</h3>
        <p>{players} players</p>
      </Link>
    </li>
  )
}

export default function PartyList(props) {
  const title = props.title
  const parties = props.parties
  let partyList = parties.map(party => <PartyListItem key={party.id} id={party.id} name={party.name} players={party.players} />) 
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {partyList}
      </ul>
    </div>
    
  )
}