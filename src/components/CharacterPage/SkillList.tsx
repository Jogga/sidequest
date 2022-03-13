import React, { Key } from 'react'
import styled from 'styled-components'
import { colors } from "../../globalStyles"
import { Skill } from "../../models/Skill"
import SkillListItem from './SkillListItem'

const StyledSkillList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`

const StyledSkillCategory = styled.div`
 background: white;
 border-radius: 6px;
 padding: 12px 16px 16px;
 box-shadow: 0px 2px 5px ${ colors.Background10 };
`
const CategoryTitle = styled.h3`
 margin: 0 0 8px;
 padding: 8px;
`

const Categories = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 16px;
    row-gap: 16px;
  } 
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
        <SkillListItem key={skill.id as Key} skill={skill} clickHandler={props.probeHandler} />
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