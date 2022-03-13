import React, { Key } from 'react'
import styled from 'styled-components'
import { Attribute } from '../../models/Attribute'

const StyledAttributeList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  list-style-type: none;
`

const AttributeContainer = styled.li`
  padding: 7px;
  border-radius: 6px;
  border: 1px solid #eee;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-content: center;
`

const AttributeShorthand = styled.h4`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  `
  
  const AttributeValue = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
`

type AttributesProps = {
  attributes: Attribute[]
}

export default function AttributeList(props: AttributesProps) {
  let attributes: Attribute[] = props.attributes

  let AttributeListItems = attributes.map(attribute => {
    return (
      <AttributeContainer key={attribute.id as Key}>
        <AttributeShorthand>{ attribute.shortName }</AttributeShorthand>
        <AttributeValue>{ attribute.value }</AttributeValue>
      </AttributeContainer>
    )
  })
  return (
    <StyledAttributeList>
      {AttributeListItems}
    </StyledAttributeList>
  )
}
