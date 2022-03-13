import { DocumentData, QueryDocumentSnapshot, DocumentSnapshot } from "firebase/firestore"
import { Attribute, AttributeId } from "./Attribute"
import { Energy } from "./Energy"
import { Skill } from "./Skill"

export class Character {
  name: string
  id: string
  life: Energy
  karma?: Energy
  astral?: Energy
  playerId: String
  attributes: Attribute[] = []
  skills: Skill[] = []

  constructor(doc: DocumentSnapshot<DocumentData>)
  constructor(doc: QueryDocumentSnapshot<DocumentData>) {
    this.playerId = doc.get("player")
    this.name = doc.get("name")
    this.id = doc.id
    this.life = new Energy("Lebenspunkte", doc.get("lifePoints"))
    
    const attributeData = doc.get("attributes")

    for (const id in AttributeId) {
      this.attributes.push(new Attribute(AttributeId[id as keyof typeof AttributeId], attributeData[id]))
    }
  }
}