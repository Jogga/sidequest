import React, { useRef } from "react"
import styled from "styled-components"
import { colors } from "../globalStyles"
import { PrimaryButton } from "./Button"

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
  
  const difficultyRef = useRef()

  function handleRoll() {
    console.log(`Roll with ${ difficultyRef.current.value }`)
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
        <PrimaryButton onClick={handleRoll}>Roll the dice</PrimaryButton>
        <button onClick={handleClose}>Close</button>
      </Modal>
    </BackDrop>)
}
