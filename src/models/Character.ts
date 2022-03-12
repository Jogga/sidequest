import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore"
import { Attribute } from "./Attribute"
import { Energy } from "./Energy"
import { Skill } from "./Skill"

export class Character {
  name: string
  id: string
  life?: Energy
  karma?: Energy
  astral?: Energy
  playerId: String
  attributes: Attribute[] = []
  skills: Skill[] = []

  constructor(doc: QueryDocumentSnapshot<DocumentData>) {
    this.name = doc.get("name")
    this.id = doc.id
    this.playerId = doc.get("player")
  }
}