export enum AttributeId {
  ATTR_1 = "MU",
  ATTR_2 = "IN",
  ATTR_3 = "KL",
  ATTR_4 = "CH",
  ATTR_5 = "KO",
  ATTR_6 = "KK",
  ATTR_7 = "GE",
  ATTR_8 = "FF",
}

export class Attribute {
  id: string
  //name: string
  value: number

  constructor(id: string, value: number) {
    this.id = id
    //this.name = name
    this.value = value
  }
}