import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import { db } from '../firebase'
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Attributes from './Attributes'
import Energy from './Energy'
import Page from './Page'
import { skills } from '../services/skills'
import Skill from './Skill'
import SkillProbeOverlay from './ProbeOverlay';

const energyTypes = {}
energyTypes.life = {
  key: "lifePoints",
  label: "Lebensenergie"
}
energyTypes.astral = {
  key: "astralPoints",
  label: "Astralenergie",
}
energyTypes.karma = {
  key: "karmaPoints",
  label: "Karmaenergie",
}

export default function Character() {
  let params = useParams()
  let [error, setError] = useState("")
  let [character, setCharacter] = useState()
  let [lifePoints, setLifePoints] = useState()
  let [astralPoints, setAstralPoints] = useState()
  let [karmaPoints, setKarmaPoints] = useState()
  let [attributes, setAttributes] = useState()
  let [characterSkills, setCharacterSkills] = useState([])
  const characterRef = doc(db, "characters", params.characterId)
  let [editingValue, setEditingValue] = useState()
  let [skillProbe, setSkillProbe] = useState()

  function manageEdit(fieldId, toEdit) {
    if (toEdit) {
      setEditingValue(fieldId)
    } else if(editingValue === fieldId) {
      setEditingValue("")
    }
  }

  async function updateEnergyField(fieldId, newValue) {
    try {
      if(fieldId === energyTypes.life.key) {
        updateDoc(characterRef, {
          "lifePoints.current": newValue
        })
        setLifePoints(newValue)
      } else if (fieldId === energyTypes.astral.key) {
        updateDoc(characterRef, {
          "astralPoints.current": newValue
        })
        setAstralPoints(newValue)
      } else if (fieldId === energyTypes.karma.key) {
        updateDoc(characterRef, {
          "karmaPoints.current": newValue
        })
        setKarmaPoints(newValue)
      }
    } catch (error) {
      console.log(error)
      setError("Could not update character")
    } finally {
      setEditingValue("")
    }
  }

  useEffect(() => {
    (async () => {
      console.log("effect")
      try {
        let data = await getDoc(characterRef)
        setCharacter(data)

        let life = data.get(energyTypes.life.key)
        setLifePoints(life["current"])

        let astral = data.get(energyTypes.astral.key)
        setAstralPoints(astral["current"])
        
        let karma = data.get(energyTypes.karma.key)
        setKarmaPoints(karma["current"])

        let skillsData = data.get("skills")
        setCharacterSkills(skillsData)

        let attributesData = data.get("attributes")
        setAttributes(attributesData)

      } catch (error) {
        console.log(error)
        setError("Could not load character")
      }
    })()
  }, [])

  function probeSkill(id, points) {
    setSkillProbe({ id: id, points: points })
  }

  function closeProbeOverlay() {
    setSkillProbe()
  }

  let CategoryList = skills.map(category => {
    let skillList = category.list.map(skill => {
      let fw = 0
      if (characterSkills[skill.name]) {
        fw = characterSkills[skill.name]
      }
      return <Skill key={skill.name} skill={skill} skillPoints={fw} probeHandler={probeSkill}/>
    })
    return (
      <div key={category.name}>
        <h3>{category.name}</h3>
        <ul>
          {skillList}
        </ul>
      </div>
    )
  })
  return (
    <>
      { skillProbe &&
        <SkillProbeOverlay probe={skillProbe} attibutes={attributes} closeHandler={closeProbeOverlay}/>
      }
      <Header />
      <Page backNav={true}>
      {error && <p>{ error }</p>}
      <h1>{ character && character.get("name") }</h1>
      { character && 
        <>
          <Attributes attributes={character.get("attributes")} />
          <Energy 
            energy={character.get(energyTypes.life.key)}
            currentEnergy={lifePoints}
            fieldId={energyTypes.life.key}
            label={energyTypes.life.label} 
            editing={editingValue === energyTypes.life.key}
            onEdit={manageEdit}
            onUpdate={updateEnergyField}/>
          <Energy 
            energy={character.get(energyTypes.astral.key)}
            currentEnergy={astralPoints}
            fieldId={energyTypes.astral.key}
            label={energyTypes.astral.label} 
            editing={editingValue === energyTypes.astral.key}
            onEdit={manageEdit}
            onUpdate={updateEnergyField}/>
          <Energy 
            energy={character.get(energyTypes.karma.key)}
            currentEnergy={karmaPoints}
            fieldId={energyTypes.karma.key}
            label={energyTypes.karma.label} 
            editing={editingValue === energyTypes.karma.key}
            onEdit={manageEdit}
            onUpdate={updateEnergyField}/>
        </>
      }
      {CategoryList}
      </Page>
    </>
  )
}