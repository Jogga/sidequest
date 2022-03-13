import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import { db } from '../../firebase'
import { doc, getDoc, updateDoc } from "firebase/firestore"
import Page from '../Page'
import SkillProbeOverlay from '../ProbeOverlay'
import { Character } from '../../models/Character'
import AttributeList from './AttributeList'
import SkillList from './SkillList'
import { Skill } from '../../models/Skill'

type CharacterParams = {
  characterId: string
}

export default function CharacterPage() {
  let { characterId } = useParams<CharacterParams>()
  let [error, setError] = useState<string>("")
  let [loading, setLoading] = useState<boolean>(false)
  let [character, setCharacter] = useState<Character>()
  let [editingValue, setEditingValue] = useState()
  let [skillProbe, setSkillProbe] = useState<Skill | null>(null)

  // function manageEdit(fieldId, toEdit) {
  //   if (toEdit) {
  //     setEditingValue(fieldId)
  //   } else if(editingValue === fieldId) {
  //     setEditingValue("")
  //   }
  // }

  // async function updateEnergyField(fieldId, newValue) {
  //   try {
  //     if(fieldId === energyTypes.life.key) {
  //       updateDoc(characterRef, {
  //         "lifePoints.current": newValue
  //       })
  //       setLifePoints(newValue)
  //     } else if (fieldId === energyTypes.astral.key) {
  //       updateDoc(characterRef, {
  //         "astralPoints.current": newValue
  //       })
  //       setAstralPoints(newValue)
  //     } else if (fieldId === energyTypes.karma.key) {
  //       updateDoc(characterRef, {
  //         "karmaPoints.current": newValue
  //       })
  //       setKarmaPoints(newValue)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     setError("Could not update character")
  //   } finally {
  //     setEditingValue("")
  //   }
  // }

  useEffect(() => {
    (async () => {
      console.log("effect")
      try {
        setLoading(true)
        setError("")

        if (!characterId) {           
          setError("No Character Id provided")
          return
        }
        
        // Load character
        const characterRef = doc(db, "characters", characterId)
        let characterDoc = await getDoc(characterRef)
        setCharacter(new Character(characterDoc))

      } catch (error) {
        console.log(error)
        setError("Could not load character")
      }
    })()
  }, [])

  function probeSkill(skill: Skill) {
    setSkillProbe(skill)
  }

  function closeProbeOverlay() {
    setSkillProbe(null)
  }

  // let CategoryList = skills.map(category => {
  //   let skillList = category.list.map(skill => {
  //     let fw = 0
  //     if (characterSkills[skill.name]) {
  //       fw = characterSkills[skill.name]
  //     }
  //     return <Skill key={skill.name} skill={skill} skillPoints={fw} probeHandler={probeSkill}/>
  //   })
  //   return (
  //     <div key={category.name}>
  //       <h3>{category.name}</h3>
  //       <ul>
  //         {skillList}
  //       </ul>
  //     </div>
  //   )
  // })
  return (
    <>
      { skillProbe && character &&
        <SkillProbeOverlay skill={skillProbe} attibutes={character.attributes} closeHandler={closeProbeOverlay}/>
      }
      <Header />
      <Page backNav={true}>
      {error && <p>{ error }</p>}
      { character && 
        <>
          <h1>{ character.name }</h1>
          <AttributeList attributes={character.attributes} />
          <SkillList skills={character.skills} probeHandler={probeSkill} />
          {/* 
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
            onUpdate={updateEnergyField}/> */}
        </>
      }
      {/* {CategoryList} */}
      </Page>
    </>
  )
}