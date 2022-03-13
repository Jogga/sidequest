export enum AttributeId {
  ATTR_1 = "ATTR_1",
  ATTR_2 = "ATTR_2",
  ATTR_3 = "ATTR_3",
  ATTR_4 = "ATTR_4",
  ATTR_5 = "ATTR_5",
  ATTR_6 = "ATTR_6",
  ATTR_7 = "ATTR_7",
  ATTR_8 = "ATTR_8",
}

export class Attribute {
  id: AttributeId
  value?: number
  name: string
  shortName: string

  constructor(id: string, value?: number) {
    this.id = AttributeId[id as keyof typeof AttributeId]
    this.value = value ?? undefined

    switch(this.id) {
      case AttributeId.ATTR_1: {
        this.name = "Mut"
        this.shortName = "MU"
        break
      }
      case AttributeId.ATTR_2: {
        this.name = "Intuition"
        this.shortName = "IN"
        break
      }
      case AttributeId.ATTR_3: {
        this.name = "Klugheit"
        this.shortName = "KL"
        break
      }
      case AttributeId.ATTR_4: {
        this.name = "Charisma"
        this.shortName = "CH"
        break
      }
      case AttributeId.ATTR_5: {
        this.name = "Konstitution"
        this.shortName = "KO"
        break
      }
      case AttributeId.ATTR_6: {
        this.name = "Koerperkraft"
        this.shortName = "KK"
        break
      }
      case AttributeId.ATTR_7: {
        this.name = "Gewandheit"
        this.shortName = "GE"
        break
      }
      case AttributeId.ATTR_8: {
        this.name = "Fingerfertigkeit"
        this.shortName = "FF"
        break
      }
    }
  }
}