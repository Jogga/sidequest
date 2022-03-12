import { DocumentData, DocumentSnapshot } from "firebase/firestore"

export class Host {
  name: String
  id: String

  constructor(doc: DocumentSnapshot<DocumentData>) {
    this.name = doc.get("name")
    this.id = doc.id
  }
}