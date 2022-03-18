import { doc, updateDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase'
import { AttributeId } from '../../models/Attribute'
import { SpeciesId } from '../../models/Species'
import { PrimaryButton } from '../Button'
import Header from '../Header'
import Page from '../Page'

class CharacterDoc {
  name: string
  modified: string
  attributes: any
  adventurePoints: number
  skills: any
  lifePoints: any
  astralPoints?: any
  spells?: Map<string, number>
  karmaPoints?: Map<string, number>

  constructor(json: any) {
    this.name = json.name
    this.adventurePoints = json.ap.total
    this.modified = json.dateModified

    this.attributes = {}

    this.attributes[AttributeId.ATTR_1] = 8
    this.attributes[AttributeId.ATTR_2] = 8
    this.attributes[AttributeId.ATTR_3] = 8
    this.attributes[AttributeId.ATTR_4] = 8
    this.attributes[AttributeId.ATTR_5] = 8
    this.attributes[AttributeId.ATTR_6] = 8
    this.attributes[AttributeId.ATTR_7] = 8
    this.attributes[AttributeId.ATTR_8] = 8

    json.attr.values.forEach((attr: { id: string ; value: number }) => {
      this.attributes[attr.id] = attr.value
    });

    this.skills = {}
    for (const talent in json.talents) {
      this.skills[talent] = json.talents[talent]
    }
    
    // LE Grundwert + KO * 2 + Vorteile und zukauf
    let lp: number = 0
    switch (json.r) {
      case SpeciesId.R_1: {
        lp = 5
        break
      }
      case SpeciesId.R_2: {
        lp = 2
        break
      }
      case SpeciesId.R_3: {
        lp = 5
        break
      }
      case SpeciesId.R_3: {
        lp = 8
        break
      }
     }
    
    lp += (this.attributes[AttributeId.ATTR_7] * 2)

    if(json.activatable.ADV_25) {
      lp += json.activatable.ADV_25[0].tier
    }
    this.lifePoints = {}
    this.lifePoints.maximum = lp


    // Zauberer?
    if(json.activatable.ADV_50) {
      this.astralPoints = {}
      this.astralPoints.maximum = 20
      if(json.activatable.SA_255) {
        this.astralPoints.maximum += this.attributes[AttributeId.ATTR_4]
      }
    }
  }
}

type CharacterPageParams = {
  characterId: string
}

export default function CharacterUpdatePage() {
  const characterId = useParams<CharacterPageParams>().characterId
  const [character, setCharacterDoc] = useState<CharacterDoc | null>(null)
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
  const [updated, setUpdated] = useState<boolean>(false)

  function handleFile(e: any) {
    setUpdated(false)
    const fileReader = new FileReader()
    fileReader.readAsText(e.target.files[0], "UTF-8")
    fileReader.onload = e => {
      try {
        if(typeof fileReader.result === 'string') {
          const json: any = JSON.parse(fileReader.result)
          setCharacterDoc(new CharacterDoc(json))
        }
      } catch {
        console.log("Not valid JSON!")
      }
    }
  }

  function onDiscard() {
    setCharacterDoc(null)
  }

  function onUpdate() {
    try {
      console.log("on update")
      setLoading(true)
      if (!characterId || !character) {           
        setError("No Character Id provided")
        return
      }
      const characterRef = doc(db, "characters", characterId)
      updateDoc(characterRef, {
        "name": character.name,
        "skills": character.skills,
        "attributes": character.attributes,
        "adventurePoints": character.adventurePoints,
      })
    } catch (error) {
      console.log(error)
      setError("Could not update character")
    } finally {
      setLoading(false)
      setUpdated(true)
      setCharacterDoc(null)
    }
  }
  return (
    <>
      <Header />
      <Page backNav={true}>
        <h1>Character aktualisieren</h1>
        {updated &&
          <p>Aktualisiert!</p>
        }
        {!character &&
          <input type="file" onChange={handleFile} accept=".json" />
        }
        {character &&
          <div>
            <p>{character.name}</p>
            <p>Abenteuerpunkte: {character.adventurePoints}</p>
            <p>Zuletzt aktualisiert: { new Intl.DateTimeFormat('de-DE', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(character.modified)) }</p>
            { !loading &&
              <PrimaryButton onClick={onUpdate}>Aktualisieren</PrimaryButton>
            }
            { loading &&
              <p>Lädt…</p>
            }
            <button onClick={onDiscard}>Verwerfen</button>
          </div>
        }
      </Page>
    </>
  )
}
