import React from 'react'
import styled from 'styled-components'
import ShapeDiceGrey from '../assets/dice-shape-grey.svg'


const Dice = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${ShapeDiceGrey});
  text-align: center;
  line-height: 48px;
`

const Dices = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;

`

const Result = styled.div`
  padding: 24px 0;
`


export default function ProbeResult(props) {
  console.log(props.result)
  function ResultDisplay() {
  if(props.result === undefined) {
    return (
      <Dices>
        <Dice />
        <Dice />
        <Dice />
      </Dices>
    )
  } else {

    return (
      <Dices>
        <Dice>{props.result.rolls[0]}</Dice>
        <Dice>{props.result.rolls[1]}</Dice>
        <Dice>{props.result.rolls[2]}</Dice>
      </Dices>
    )
  }
}
  
  return (
    <Result>
      <ResultDisplay />
    </Result>
  )
}
