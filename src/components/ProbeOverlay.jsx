import React, { useRef, useState } from "react"
import styled from "styled-components"
import { colors } from "../globalStyles"
import { PrimaryButton } from "./Button"
import { d20 } from "../services/dice"

const BackDrop = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(10,10,20,0.15);
  align-items: center;
  justify-content: center;
`

const Modal = styled.div`
  max-width: 400px;
  min-width: 320px;
  min-height: 200px;
  background: ${ colors.Background0 };
  padding: 16px;
  border-radius: 12px;
`

export default function ProbeOverlay(props) {
  const closeHandler = props.closeHandler
  const name = props.probe.name
  const attr0 = props.probe.attr0
  const attr1 = props.probe.attr1
  const attr2 = props.probe.attr2
  const points = props.probe.points
  const [result, setResult] = useState()
  const difficultyRef = useRef()

  function handleRoll() {
    let pointsLeft = points
    const roll0 = d20() 
    const roll1 = d20() 
    const roll2 = d20()
    if(roll0 > attr0.value) {
      pointsLeft -= roll0 - attr0.value
    }
    if(roll1 > attr1.value) {
      pointsLeft -= roll1 - attr1.value
    } 
    if(roll2 > attr2.value) {
      pointsLeft -= roll2 - attr2.value
    }
    if(pointsLeft >= 0) {
      setResult(`Success! First: ${roll0}, Second: ${roll1}, Third: ${roll2}. Points left: ${pointsLeft}`)
    } else {
      setResult(`Failed! First: ${roll0}, Second: ${roll1}, Third: ${roll2}.`)
    }
  }

  function handleClose() {
    closeHandler()
  }

  return (
    <BackDrop>
      <Modal>
        <h4>{name}</h4>
        <input type="number" name="" id="" ref={difficultyRef} />
        <p><span>{attr0.name}</span> <span>{attr0.value}</span></p>
        <p><span>{attr1.name}</span> <span>{attr1.value}</span></p>
        <p><span>{attr2.name}</span> <span>{attr2.value}</span></p>
        <p>Fertigkeitswert: {points}</p>
        { result &&
          <p><strong>{result}</strong></p>
        }
        <PrimaryButton onClick={handleRoll}>Roll the dice</PrimaryButton>
        <button onClick={handleClose}>Close</button>
      </Modal>
    </BackDrop>)
}
