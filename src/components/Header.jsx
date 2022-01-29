import React from 'react'
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../contexts/AuthContext'
import { colors } from '../globalStyles'
import { ReactComponent as Dice } from '../assets/dice-fills.svg' 

const HeaderBar = styled.nav`
  padding: 0px 24px;
  background-color: ${ colors.Background0 };
  border-bottom: 1px solid ${ colors.Background10 };
  display: flex;
  box-shadow: 0px 0px 3px #dde;
  align-items: center;
`

const MainNav = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style-type: none;
  align-items: center;
`

const StyledNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: ${ colors.Foreground100 };
  padding: 14px 12px;
  box-sizing: border-box;
  border-top: 2px solid ${ colors.Background0 };
  border-bottom: 2px solid ${ colors.Background0 };
  &:hover {
    background-color: ${colors.Active05};
    border-color: ${colors.Active05};
  }
  &.active {
    color: ${ colors.Active80 };
    border-bottom-color: ${ colors.Active80 };
  }
`

const HomeLink = styled(NavLink)`
  padding: 4px;
  margin-right: 8px;
  border-radius: 22px;
  &:hover {
    background-color: ${ colors.Active05 }
  }
  display: block;
  svg {
    display: block;
  }
`


export default function Header() {
  const { currentUser } = useAuth()
  return (
    <HeaderBar>
      <MainNav>
          <HomeLink to="/">
            <Dice />
          </HomeLink> 
          <StyledNavLink to="/parties"> Parties</StyledNavLink>
          <StyledNavLink to="/characters"> Characters</StyledNavLink>
      </MainNav>
      <StyledNavLink to="/profile">{ currentUser && currentUser.email }</StyledNavLink> 
    </HeaderBar>
  )
}
