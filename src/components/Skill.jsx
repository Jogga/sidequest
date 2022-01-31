import React from "react"
import styled from "styled-components"
import { colors } from "../globalStyles"

const SkillListItem = styled.li`
 display: flex;
 padding: 8px 16px;
 border-radius: 6px;
 &:hover{
   background-color: ${ colors.Background10 }
 }
`
const SkillName = styled.p`
  font-weight: bold;
  min-width: 200px;
  margin: 0;
`
const SkillInfos = styled.div`
  display: flex;
  flex-grow: 1;
`
const Attributes = styled.div`
 min-width: 120px;
`

export default function Skill(props) {
  const name = props.skill.name
  const attribute0 = props.skill.attributes[0]
  const attribute1 = props.skill.attributes[1]
  const attribute2 = props.skill.attributes[2]
  const skillPoints = props.skillPoints ? props.skillPoints : 0
  const probeHandler = props.probeHandler

  function handleProbe() {
    probeHandler(name, attribute0, attribute1, attribute2, skillPoints)
  }
  
  return (
    <SkillListItem>
      <SkillInfos>

      <SkillName>{name}</SkillName>
        <Attributes>
          (<span>{attribute0}</span>, <span>{attribute1}</span>, <span>{attribute2}</span>)
        </Attributes>
        <div>{skillPoints}</div>
      </SkillInfos>
      <button onClick={handleProbe}>Try</button>
    </SkillListItem>
  )
}
