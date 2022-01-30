import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import styled from "styled-components"
import { colors } from "../globalStyles"
import { ReactComponent as IconLock } from '../assets/icon-lock.svg' 


const StyledCharacterListItem = styled.li`
  background-color: ${ colors.Background0 };
  padding: 16px 24px;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 1px 0px 6px rgba(40,40,80,.1);
  display: flex;
  align-items: center;
  min-height: 32px;
`

const CharacterName = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`

const CharacterInfo = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 8px;
`

const OpenButton = styled(Link)`
  background-color: ${ colors.Primary80 };
  color: ${ colors.Background0 };
  padding: 6px 12px;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  border-radius: 6px;
  &:hover{
    background-color: ${ colors.Primary90 };
  }
`

const PlayedByYouBadge = styled.span`
  font-size: 12px;
  line-height: 20px;
  background-color: #fed;
  color: #8a4703;
  padding: 2px 8px;
  border-radius: 12px;
`

function CharacterListItem(props) {
  const character = props.character
  const userId = props.userId
  const unlocked = props.unlocked

  let button;
  if(character.player === userId || unlocked) {
    button = <OpenButton to={character.id}>View</OpenButton>
  } else {
    button = <IconLock />
  }

  return(
    <StyledCharacterListItem>
      <CharacterInfo>
        <CharacterName>{character.name}</CharacterName> 
        {character.player === userId && 
          <PlayedByYouBadge>Your character</PlayedByYouBadge>
        }
      </CharacterInfo>
        {button}
    </StyledCharacterListItem>
  )
}

const StyledCharacterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

export default function CharacterList(props) {
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