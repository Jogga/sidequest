import React, { useRef } from 'react'
import styled from 'styled-components'
import { Energy } from '../../models/Energy'

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

type EnergyFieldProps = {
  energy: Energy,
  editing: Boolean,
  onToggleEdit: Function,
  onApply: Function,
}

export default function EnergyField(props: EnergyFieldProps) {
  let energy: Energy = props.energy
  const valueInputRef = useRef<HTMLInputElement>(null)

  function handleEditToggle() {
    props.onToggleEdit()
  }

  function handleApplyButtonClick() {
    if(!valueInputRef.current) {
      console.log("input ref is null")
      return
    } else {
      props.onApply(energy.id, Number(valueInputRef?.current.value))
    }
  }
  return (
    <EnergyContainer>
      <EnergyTitle>{energy.name}</EnergyTitle>
      {!props.editing        
        ? <>
            <Value>
              <CurrentValue>{energy.currentValue}</CurrentValue>
              <MaxValue> / {energy.maximumValue}</MaxValue>
            </Value>
            <button onClick={handleEditToggle}>Edit</button>
          </>
        : <ValueInputContainer>
            <ValueInput type="number" min="0" defaultValue={energy.currentValue} max={energy.maximumValue} ref={valueInputRef}/>
            <button onClick={handleEditToggle}>Cancel</button>
            <button onClick={handleApplyButtonClick}>Apply</button>
          </ValueInputContainer>   
      }
    </EnergyContainer>
  )
}
