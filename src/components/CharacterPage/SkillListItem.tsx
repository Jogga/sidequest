import React from 'react'
import { Skill } from '../../models/Skill'
import styled from 'styled-components'
import { colors } from '../../globalStyles'

const StyledSkillListItem = styled.li`
 display: flex;
 padding: 4px 8px;
 border-radius: 4px;
 cursor: pointer;
 &:hover{
   background-color: ${ colors.Background5 };
 }
`
const SkillName = styled.p`
  font-weight: 500;
  min-width: 200px;
  flex-grow: 1;
  color: ${ colors.Foreground100 };
  margin: 0;
`
const SkillInfos = styled.div`
  display: flex;
  flex-grow: 1;
  color: ${ colors.Foreground80 };
`
const Attributes = styled.div`
 min-width: 120px;
`


type SkillListItemProps = {
  skill: Skill
  clickHandler: Function
}
export default function SkillListItem(props: SkillListItemProps) {
  const skill = props.skill

  function handleClick() {
    props.clickHandler(skill)
  }
  return (
    <StyledSkillListItem key={skill.id} onClick={handleClick}>
      <SkillInfos>
      <SkillName>{skill.name}</SkillName>
        <Attributes>
          (<span>{skill.attributes[0].shortName}</span>, <span>{skill.attributes[1].shortName}</span>, <span>{skill.attributes[2].shortName}</span>)
        </Attributes>
        <div>{skill.value}</div>
      </SkillInfos>
    </StyledSkillListItem>
  )
}
