import React, { useRef, useState } from "react"
import styled from "styled-components"
import { colors } from "../../globalStyles"
import { PrimaryButton, SecondaryButton } from "../Button"
import { probeSkill, skillz } from "../../game/skills"
import ProbeResult from "../ProbeResult"
import { Skill } from "../../models/Skill"

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
  const [result, setResult] = useState()
  const [modificator, setModificator] = useState()
  const difficultyRef = useRef()

  function handleRoll() {

    // TODO: Put in other function
    // const modificatorValue = modificator === "harder" ? -1 * difficultyRef.current.value : difficultyRef.current.value

    // setResult(probeSkill(skillId, modificatorValue, attributes, skillPoints))
  }

  function handleReset() {
    // setResult()
  }

  function handleClose() {
    closeHandler()
  }

  // function handleModificatorChange(event) {
  //   setModificator(event.target.value)
  // }

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
          {/* <input type="number" name="modificatorValue" id="modificatorValue" ref={difficultyRef} min={0} />
          <select name="modificator" id="modificator" onChange={handleModificatorChange}>
            <option value="easier">Erleichtert</option>
            <option value="harder">Erschwert</option>
          </select> */}
        </ModificatorControl>
        
        <ProbeResult result={result}/>
        { result &&
        /*
          <>
            <p><strong>{result.type}</strong></p>
            <p>Du hast {result.rolls[0]}, {result.rolls[1]} und {result.rolls[2]} gewürfelt.</p>
            <p>Fertigkeitspunkte übrig: {result.pointsLeft}</p>
            <p>Qualitätsstufe: {result.qualtiyLevel}</p>
            <SecondaryButton onClick={handleReset}>Zurücksetzen</SecondaryButton>
          </> */
          test
        }
        { !result &&
          <PrimaryButton onClick={handleRoll}>Würfeln</PrimaryButton>
        }

      </Modal>
    </BackDrop>)
}