import React from 'react'

export default function Attributes(props) {
  const mappedAttributes = Object.keys(props.attributes).map(key => 
    <li key={key}><strong>{key}</strong> <span>{props.attributes[key]}</span></li>
  )
  return (
    <ul>
      { mappedAttributes }
    </ul>
  )
}
