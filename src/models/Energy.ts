export enum EnergyId {
  life = "lifePoints",
  astral = "astralPoints",
  karma = "karmaPoints"
}

export class Energy {
  id: EnergyId
  name: string
  currentValue: number
  maximumValue: number

  constructor(id: EnergyId, doc: any) {
    this.id = id
    this.currentValue = doc.current
    this.maximumValue = doc.maximum

    switch(id) {
      case(EnergyId.life): {
        this.name = "Lebenspunkte"
        break
      }
      case(EnergyId.astral): {
        this.name = "Astralpunkte"
        break
      }
      case(EnergyId.karma): {
        this.name = "Karmapunkte"
        break
      }
    }
  }
}