import styled from "styled-components"
import { useAuth } from "../../contexts/AuthContext"
import { Character } from "../../models/Character"
import CharacterListItem from "./CharacterListItem"

const StyledCharacterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

type CharacterListProps = {
  characters: Character[]
  unlocked: Boolean
}

export default function CharacterList(props: CharacterListProps) {
  const characters = props.characters
  const unlocked = props.unlocked
  const { currentUser } = useAuth()
  
  let characterList = characters.map(character => <CharacterListItem key={character.id} unlocked={unlocked} character={character} userId={currentUser.uid}/>) 
  return (
    <StyledCharacterList>
      {characterList}
    </StyledCharacterList>
    
  )
}