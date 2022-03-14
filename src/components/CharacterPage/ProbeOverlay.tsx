import React, { useRef, useState, ChangeEvent, ChangeEventHandler } from "react"
import styled from "styled-components"
import { colors } from "../../globalStyles"
import { PrimaryButton, SecondaryButton } from "../Button"
import { Skill, SkillProbeResult } from "../../models/Skill"
import ShapeDiceGrey from '../../assets/dice-shape-grey.svg'
import ShapeDiceBlue from '../../assets/dice-shape-blue.svg'
import { Modificator, ModificatorId } from "../../models/Modificator"


const Dice = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${ShapeDiceGrey});
  text-align: center;
  line-height: 48px;
`

const DiceResult = styled(Dice)`
  background-image: url(${ShapeDiceBlue});
  color: white;
`

const Dices = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`

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
  width: 400px;
  min-width: 320px;
  min-height: 200px;
  background: ${ colors.Background0 };
  padding: 16px;
  border-radius: 12px;
`
const Traits = styled.div`
  display: flex;
  gap: 4px;
  align-content: stretch;
`
const Trait = styled.div`
  flex-grow: 1;
  text-align: center;
`
const SkillTitle = styled.h4`
  margin: 0;
  text-align: center;
  border-radius: 4px;
  font-weight: 500;
`
const SkillBox = styled.div`
  border-radius: 6px;
  padding: 20px 16px;
  border: 1px solid ${colors.Background10};
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const ModalHeader = styled.header`
  display: flex;
  margin-bottom: 16px;
`
const ModalTitle = styled.div`
  flex-grow: 1;
  font-weight: 700;
`
const ModificatorControl = styled.div`
  display: flex;
  margin-top: 8px;
`
const AttributeSpan = styled.span`
  text-transform: uppercase;
`

type SkillProbeOverlayProps = {
  skill: Skill,
  closeHandler: Function
}

export default function SkillProbeOverlay(props: SkillProbeOverlayProps) {
  const skill = props.skill
  const closeHandler = props.closeHandler
  const [result, setResult] = useState<SkillProbeResult | null>()
  const [modificator, setModificator] = useState<Modificator>(new Modificator())

  function handleRoll() {
    switch(modificator.type) {
      case ModificatorId.harder: {
        setResult(skill.probeSkill((-1 * modificator.value)))
        break
      }
      default: {
        setResult(skill.probeSkill(modificator.value))
        break
      }
    }
  }

  function handleReset() {
    setResult(null)
  }

  function handleClose() {
    closeHandler()
  }

  const handleModificatorTypeChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let updatedModificator = modificator
    if (e.target.value === ModificatorId.harder) {
      updatedModificator.type = ModificatorId.harder
    } else {
      updatedModificator.type = ModificatorId.easier
    }
    setModificator(updatedModificator)
  }

  const handleModificatorChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let updatedModificator = modificator
    updatedModificator.value = Number(e.target.value)
    setModificator(updatedModificator)
  }

  return (
    <BackDrop>
      <Modal>
        <ModalHeader>
          <ModalTitle>Talentprobe</ModalTitle>
          <button onClick={handleClose}>Schließen</button>
        </ModalHeader>
        <SkillBox>
          <SkillTitle>{skill.name}</SkillTitle>
          <Traits>
            <Trait>
              <AttributeSpan>{skill.attributes[0].shortName}</AttributeSpan> {skill.attributes[0].value}
            </Trait>
            <Trait>
              <AttributeSpan>{skill.attributes[1].shortName}</AttributeSpan> {skill.attributes[1].value}
            </Trait>
            <Trait>
              <AttributeSpan>{skill.attributes[2].shortName}</AttributeSpan> {skill.attributes[2].value}
            </Trait>
            <Trait>
              Fertigkeitswert: {skill.value}
            </Trait>
          </Traits>
        </SkillBox>
        <ModificatorControl>
          <input type="number" name="modificatorValue" id="modificatorValue" min={0} onChange={handleModificatorChange} />
          <select name="modificator" id="modificator"  onChange={handleModificatorTypeChange}>
            <option value={ ModificatorId.easier }>Erleichtert</option>
            <option value={ ModificatorId.harder }>Erschwert</option>
          </select>
        </ModificatorControl>
        
        { result &&
          <>
            <Dices>
              <DiceResult>{result.rolls[0]}</DiceResult>
              <DiceResult>{result.rolls[1]}</DiceResult>
              <DiceResult>{result.rolls[2]}</DiceResult>
            </Dices>
            <p><strong>{result.outcome}</strong></p>
            <p>Fertigkeitspunkte übrig: {result.pointsLeft}</p>
            <p>Qualitätsstufe: {result.qualityLevel}</p>
            <SecondaryButton onClick={handleReset}>Zurücksetzen</SecondaryButton>
          </>
        }
        { !result &&
        <>
          <Dices>
            <Dice>?</Dice>
            <Dice>?</Dice>
            <Dice>?</Dice>
          </Dices>
          <PrimaryButton onClick={handleRoll}>Würfeln</PrimaryButton>
        </>
        }

      </Modal>
    </BackDrop>)
}