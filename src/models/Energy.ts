import { DocumentSnapshot, DocumentData } from "firebase/firestore"

export class Energy {
  name: string
  currentValue: number
  maximumValue: number

  constructor(name: string, doc: DocumentSnapshot<DocumentData>) {
    this.name = name
    this.currentValue = 10 // doc.get("current")
    this.maximumValue = 20 // doc.get('maximum')
  }
}