import React from 'react'
import Attribute from './Attribute'
import styled from 'styled-components'

const AttributeList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  list-style-type: none;
`
export default function Attributes(props) {
  return (
    <AttributeList>
      <Attribute shorthand="mu" value={props.attributes["mu"]}/>
      <Attribute shorthand="kl" value={props.attributes["kl"]}/>
      <Attribute shorthand="in" value={props.attributes["in"]}/>
      <Attribute shorthand="ch" value={props.attributes["ch"]}/>
      <Attribute shorthand="ff" value={props.attributes["ff"]}/>
      <Attribute shorthand="ge" value={props.attributes["ge"]}/>
      <Attribute shorthand="ko" value={props.attributes["ko"]}/>
      <Attribute shorthand="kk" value={props.attributes["kk"]}/>
    </AttributeList>
  )
}
