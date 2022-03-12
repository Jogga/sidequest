import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { colors } from "../../globalStyles"
import { ReactComponent as IconLock } from '../../assets/icon-lock.svg' 
import { Character } from '../../models/Character'

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

type CharacterListItemProps = {
  character: Character
  userId: String
  unlocked: Boolean
}

export default function CharacterListItem(props: CharacterListItemProps) {
  const character = props.character
  const userId = props.userId
  const unlocked = props.unlocked

  console.log("character" + character.playerId)
  console.log("user" + userId)

  let button;
  if(character.playerId === userId || unlocked) {
    button = <OpenButton to={character.id}>View</OpenButton>
  } else {
    button = <IconLock />
  }

  return(
    <StyledCharacterListItem>
      <CharacterInfo>
        <CharacterName>{character.name}</CharacterName> 
        {character.playerId === userId && 
          <PlayedByYouBadge>Your character</PlayedByYouBadge>
        }
      </CharacterInfo>
        {button}
    </StyledCharacterListItem>
  )
}