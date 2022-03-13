import React, { Key } from 'react'
import styled from 'styled-components'
import { colors } from "../../globalStyles"
import { Skill } from "../../models/Skill"

const StyledSkillListItem = styled.li`
 display: flex;
 padding: 4px 8px;
 border-radius: 2px;
 border-top: 1px solid ${colors.Background10};
 &:hover{
   background-color: ${ colors.Background5 };
 }
`
const SkillName = styled.p`
  font-weight: 500;
  min-width: 200px;
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

const StyledSkillList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`

const StyledSkillCategory = styled.div`
 background: white;
 border-radius: 6px;
 padding: 8px 8px 16px;
`
const CategoryTitle = styled.h3`
 margin: 0 0 8px;
 padding: 8px;
`

const Categories = styled.section`
  display: grid;
`

type SkillListProps = {
  skills: Skill[]
  probeHandler: Function
}

export default function SkillList(props: SkillListProps) {
  let skills: Skill[] = props.skills

  // Split by category
  let categories: Map<string, Skill[]> = new Map()
  skills.forEach((skill) => {
    if(!categories.has(skill.category)) {
      categories.set(skill.category, [skill])
    } else {
      categories.get(skill.category)?.push(skill)
    }
  })

  // Build CategoryList
  let SkillCategories = Array.from(categories, ([key, skills]) => {
    
    // Build SkillList
    let skillListItems = skills.map(skill => {
      return (
        <StyledSkillListItem key={skill.id as Key}>
        <SkillInfos>
        <SkillName>{skill.name}</SkillName>
          <Attributes>
            (<span>{skill.attributes[0].shortName}</span>, <span>{skill.attributes[1].shortName}</span>, <span>{skill.attributes[2].shortName}</span>)
          </Attributes>
          <div>{skill.value}</div>
        </SkillInfos>
        <button>Try</button>
      </StyledSkillListItem>
      )
    })
    return(
      <StyledSkillCategory key={key}>
        <CategoryTitle>{key}</CategoryTitle>
        <StyledSkillList>
          {skillListItems}
        </StyledSkillList>
      </StyledSkillCategory>
    )
  })

  return (
    <Categories>
      {SkillCategories}
    </Categories>
  )
}