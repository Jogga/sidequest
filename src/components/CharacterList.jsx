import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

function CharacterListItem(props) {
  const character = props.character
  const userId = props.userId
  const unlocked = props.host

  let button;
  if(character.player === userId || unlocked) {
    button = <Link to={character.id}>View</Link>
  } else {
    button = <span>Locked</span>
  }

  return(
    <li>
        <h3>{character.name}</h3>
        {button}
    </li>
  )
}

export default function CharacterList(props) {
  const characters = props.characters
  const unlocked = props.unlocked
  const { currentUser } = useAuth()
  
  let characterList = characters.map(character => <CharacterListItem key={character.id} unlocked={unlocked} character={character} userId={currentUser.uid}/>) 
  return (
    <div>
      <ul>
        {characterList}
      </ul>
    </div>
    
  )
}