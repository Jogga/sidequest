import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { colors } from "../globalStyles"
import { ReactComponent as IllustrationEmpty } from "../assets/illustration-empty.svg" 
import { PrimaryButton } from "./Button"

const StyledPartyListItem = styled.li`

`

const CardLink = styled(Link)`
  margin: 0;
  text-decoration: none;
  color: ${colors.Foreground100};
  background-color: ${ colors.Background0 };
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 1px 0px 6px rgba(40,40,80,.1);
  display: flex;
  align-items: center;
  min-height: 32px;
`

const CardEmpty = styled.div`
  margin: 0;
  text-decoration: none;
  color: ${colors.Foreground100};
  background-color: ${ colors.Background0 };
  padding: 48px 24px;
  border-radius: 8px;
  box-shadow: 1px 0px 6px rgba(40,40,80,.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  min-height: 32px;
`

const EmptyMessage = styled.p`
  margin: 0;
  color: ${ colors.Foreground30 };
`

const CardInfo = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 4px;
`

const CardTitle = styled.h3`
  font-size: 14px;
  line-height: 20px;
  margin: 0;
`

const CardDescription = styled.p`
  margin: 0;
`

const ListTitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 0px 12px;
` 
const StyledPartyList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const PartySection = styled.section`
  margin-bottom: 32px;
`

function PartyListItem(props) {
  const id = props.id
  const name = props.name
  const players = props.players
  return(
    <StyledPartyListItem>
      <CardLink to={id}>
        <CardInfo>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{players} players</CardDescription>
        </CardInfo>
        <PrimaryButton to={id}>View</PrimaryButton>
      </CardLink>
    </StyledPartyListItem>
  )
}

function PartyListEmptyState(props) {
  const title = props.title
  let message = "No parties"
  if (title === "Playing") {
    message = "You do not play in any parties."
  } else if (title === "Hosting") {
    message = "You do not host any parties."
  }
  return (
    <StyledPartyListItem>
      <CardEmpty>
        <IllustrationEmpty />
        <EmptyMessage>{message}</EmptyMessage>
      </CardEmpty>
    </StyledPartyListItem>
  )
}


export default function PartyList(props) {
  const title = props.title
  const parties = props.parties
  let partyList
  if (parties.length > 0) {
    partyList = parties.map(party => <PartyListItem key={party.id} id={party.id} name={party.name} players={party.players} />) 
  } else {
    partyList = <PartyListEmptyState title={title} />
  }
  return (
    <PartySection>
      <ListTitle>{title}</ListTitle>
      <StyledPartyList>
        {partyList}
      </StyledPartyList>
    </PartySection>
    
  )
}