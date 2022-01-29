import React, { useRef } from 'react'
import styled from 'styled-components'

const EnergyContainer = styled.div`
  display: flex;
  margin: 16px 0;
  border-radius: 6px;
  padding: 15px;
  border: 1px solid #eee;
`

const EnergyTitle = styled.h4`
  margin: 0;
  min-width: 120px;
  align-self: center;
  padding: 6px 0;
`

const Value = styled.p`
  margin: 0;
  padding: 6px;
  flex-grow: 1;
`

const CurrentValue = styled.span`
  color: black;
`
const MaxValue = styled.span`
  color: #999;
`

const ValueInput = styled.input`
  border-radius: 4px;
  line-height: 20px;
  font-size: 14px;
  border: 1px solid blue;
  padding: 5px;
  flex-grow: 1;
`

const ValueInputContainer = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 8px
`

export default function Energy(props) {
  const valueInputRef = useRef()

  function handleEditButtonClick() {
    props.onEdit(props.fieldId, true)
  }

  function handleCancelButtonClick() {
    props.onEdit(props.fieldId, false)
  }
  function handleApplyButtonClick() {
    props.onUpdate(props.fieldId, valueInputRef.current.value)
  }
  return (
    <EnergyContainer>
      <EnergyTitle>{props.label}</EnergyTitle>
      {!props.editing        
        ? <>
            <Value>
              <CurrentValue>{props.currentEnergy}</CurrentValue>
              <MaxValue> / {props.energy["maximum"]}</MaxValue>
            </Value>
            <button onClick={handleEditButtonClick}>Edit</button>
          </>
        : <ValueInputContainer>
            <ValueInput type="number" min="0" defaultValue={props.currentEnergy} max={props.energy["maximum"]} ref={valueInputRef}/>
            <button onClick={handleCancelButtonClick}>Cancel</button>
            <button onClick={handleApplyButtonClick}>Apply</button>
          </ValueInputContainer>   
      }
    </EnergyContainer>
  )
}
