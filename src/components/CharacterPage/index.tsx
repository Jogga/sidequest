import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../Header'
import { db } from '../../firebase'
import { doc, getDoc, updateDoc } from "firebase/firestore"
import Page from '../Page'
import SkillProbeOverlay from './ProbeOverlay'
import { Character } from '../../models/Character'
import AttributeList from './AttributeList'
import SkillList from './SkillList'
import { Skill } from '../../models/Skill'
import { EnergyId } from '../../models/Energy'
import EnergyField from './EnergyField'

type CharacterParams = {
  characterId: string
}

enum InputField {
  lifePoints,
  astralPoints,
  karmaPoints
}

export default function CharacterPage() {
  let { characterId } = useParams<CharacterParams>()
  let [error, setError] = useState<string>("")
  let [loading, setLoading] = useState<boolean>(false)
  let [character, setCharacter] = useState<Character>()
  let [fieldToEdit, setFieldToEdit] = useState<InputField | null>(null)
  let [skillProbe, setSkillProbe] = useState<Skill | null>(null)

  function toggleLifeEdit() {
    if(fieldToEdit !== null) {
      setFieldToEdit(null)
    } else {
      setFieldToEdit(InputField.lifePoints)
    }
  }
  
  function toggleAstralEdit() {
    if(fieldToEdit) {
      setFieldToEdit(null)
    } else {
      setFieldToEdit(InputField.astralPoints)
    }
  }

  function toggleKarmaEdit() {
    if(fieldToEdit) {
      setFieldToEdit(null)
    } else {
      setFieldToEdit(InputField.karmaPoints)
    }
  }

  async function updateEnergyField(id: EnergyId, newValue: number) {
    try {
      if (!characterId || !character) {           
        setError("No Character Id provided")
        return
      }
      const characterRef = doc(db, "characters", characterId)
      let updatedCharacter = character
      switch (id) {
        case (EnergyId.life): {
          updateDoc(characterRef, {
            "lifePoints.current": newValue
          })
          let updatedCharacter = character
          updatedCharacter.life.currentValue = newValue
          break
        }
        case (EnergyId.astral): {
          if (!character.astral || !updatedCharacter.astral) return 
          updateDoc(characterRef, {
            "astralPoints.current": newValue
          })
          updatedCharacter.astral.currentValue = newValue
          break
        }
        case (EnergyId.karma): {
          if (!character.karma || !updatedCharacter.karma) return 
          updateDoc(characterRef, {
            "karmaPoints.current": newValue
          })
          updatedCharacter.karma.currentValue = newValue
          break
        }
      }
      setCharacter(updatedCharacter)
    } catch (error) {
      console.log(error)
      setError("Could not update character")
    } finally {
      setFieldToEdit(null)
    }
  }

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

  return (
    <>
      { skillProbe && character &&
        <SkillProbeOverlay skill={skillProbe} closeHandler={closeProbeOverlay}/>
      }
      <Header />
      <Page backNav={true}>
      {error && <p>{ error }</p>}
      { character && 
        <>
          <h1>{ character.name }</h1>
          <Link to="update">Update character</Link>
          <AttributeList attributes={character.attributes} />
          <EnergyField 
            energy={character.life}
            editing={fieldToEdit === InputField.lifePoints}
            onToggleEdit={toggleLifeEdit}
            onApply={updateEnergyField} />
          { character.astral &&
            <EnergyField 
              energy={character.astral}
              editing={fieldToEdit === InputField.astralPoints}
              onToggleEdit={toggleAstralEdit}
              onApply={updateEnergyField} />
          }
          { character.karma &&
            <EnergyField 
              energy={character.karma}
              editing={fieldToEdit === InputField.karmaPoints}
              onToggleEdit={toggleKarmaEdit}
              onApply={updateEnergyField} />
          }
          <SkillList skills={character.skills} probeHandler={probeSkill} />
        </>
      }
      </Page>
    </>
  )
}