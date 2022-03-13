import React from 'react'
import AttributeListItem from './AttributeListItem'
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

type AttributesProps = {
  attributes: Attribute[]
}

export default function AttributeList(props: AttributesProps) {
  let attributes: Attribute[] = props.attributes

  let AttributeListItems = attributes.map(attribute => {
    return <AttributeListItem key={attribute.id} shorthand={attribute.id} value={attribute.value} />
  })

  return (
    <StyledAttributeList>
      {AttributeListItems}
    </StyledAttributeList>
  )
}
