import React from 'react'
import styled from 'styled-components'

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

export default function Attribute(props) {
  return (
    <AttributeContainer key={props.shorthand }>
      <AttributeShorthand>{ props.shorthand.toUpperCase() }</AttributeShorthand>
      <AttributeValue>{ props.value }</AttributeValue>
    </AttributeContainer>
  )
}
