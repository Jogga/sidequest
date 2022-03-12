import { DocumentData, DocumentSnapshot } from "firebase/firestore"
import { Character } from "./Character"
import { Host } from "./Host"

export class Party {
  name: String
  id: String
  characters: Character[]
  host: Host

  constructor(doc: DocumentSnapshot<DocumentData>, host: Host, characters: Character[]) {
    this.name = doc.get("name")
    this.id = doc.id
    this.host = host
    this.characters = characters
  }
}