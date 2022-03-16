import { useState } from 'react'
import Header from '../Header'
import Page from '../Page'

class CharacterDoc {
  name: string
  modified: string
  attributes: Map<string, number>
  adventurePoints: number
  skills: Map<string, number>
  lifePoints: Map<string, number>
  spells?: Map<string, number>
  karmaPoints?: Map<string, number>
  astralPoints?: Map<string, number>

  constructor(json: any) {
    this.name = json.name
    this.adventurePoints = json.ap.total
    this.modified = json.dateModified

    this.attributes = new Map()
    for (var i: number = 0; i < json.attr.values.length; i++) {
      this.attributes.set(json.attr.values[i].id, json.attr.values[i].value)
    }
    
    this.skills = new Map()
    for (const talent in json.talents) {
      this.skills.set(talent, json.talents[talent])
    }

    this.lifePoints = new Map()
  }
}

export default function CharacterUpdatePage() {
  const [character, setCharacterDoc] = useState<CharacterDoc | null>(null)

  function handleFile(e: any) {
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
  
  console.log(character)
  return (
    <>
      <Header />
      <Page backNav={true}>
        <h1>Update character</h1>
        {!character &&
          <input type="file" onChange={handleFile} accept=".json" />
        }
        {character &&
          <div>
            <p>{character.name}</p>
            <p>Abenteuerpunkte: {character.adventurePoints}</p>
            <p>Zuletzt aktualisiert: { new Intl.DateTimeFormat('de-DE', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(character.modified)) }</p>
            <button onClick={onDiscard}>Discard</button>
          </div>
        }
      </Page>
    </>
  )
}
