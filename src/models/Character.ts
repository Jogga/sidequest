import { DocumentData, QueryDocumentSnapshot, DocumentSnapshot } from "firebase/firestore"
import { Attribute, AttributeId } from "./Attribute"
import { Energy } from "./Energy"
import { Skill, SkillId } from "./Skill"

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

    for(const id in AttributeId) {
      const value = attributeData[id]
      if(typeof value === "number") {
        this.attributes.push(new Attribute(id, value))
      }
    }

    const skillData = doc.get("skills")
    for (const id in SkillId) {
      const value = skillData[id]
      if(typeof value === "number") {
        this.skills.push(new Skill(id, value))
      } else {
        this.skills.push(new Skill(id))
      }
    }
  }
}