import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from './Header';
import { db } from '../firebase'
import { doc, getDoc } from "firebase/firestore"; 
import Attributes from './Attributes';
import Energy from './Energy';

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
  let params = useParams();
  let [error, setError] = useState("")
  let [character, setCharacter] = useState()
  let [editingValue, setEditingValue] = useState()

  function manageEdit(fieldId, toEdit) {
    if (toEdit) {
      setEditingValue(fieldId)
    } else if(editingValue === fieldId) {
      setEditingValue("")
    }
  }

  useEffect(() => {
    (async () => {
      console.log("effect")
      try {
        let data = await getDoc(doc(db, "characters", params.characterId))
        setCharacter(data)
      } catch (error) {
        console.log(error)
        setError("Could not load character")
      }
    })()
  }, [params])

  return (
    <div>
      <Header />
      {error && <p>{ error }</p>}
      <h1>{ character && character.get("name") }</h1>
      { character && 
        <>
          <Attributes attributes={character.get("attributes")} />
          <Energy 
            energy={character.get(energyTypes.life.key)}
            fieldId={energyTypes.life.key}
            label={energyTypes.life.label} 
            editing={editingValue === energyTypes.life.key}
            onEdit={manageEdit}/>
          <Energy 
            energy={character.get(energyTypes.astral.key)}
            fieldId={energyTypes.astral.key}
            label={energyTypes.astral.label} 
            editing={editingValue === energyTypes.astral.key}
            onEdit={manageEdit}/>
          <Energy 
            energy={character.get(energyTypes.karma.key)}
            fieldId={energyTypes.karma.key}
            label={energyTypes.karma.label} 
            editing={editingValue === energyTypes.karma.key}
            onEdit={manageEdit}/>
        </>
      }
      <p></p>
    </div>
  )
}