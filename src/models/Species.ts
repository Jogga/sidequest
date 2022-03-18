export enum SpeciesId {
  R_1 = "R_1",
  R_2 = "R_2",
  R_3 = "R_3",
  R_4 = "R_4",
}

export class Species {
  id: SpeciesId
  name: string

  constructor(id: SpeciesId) {
    this.id = id
    switch(id) {
      case SpeciesId.R_1: {
        this.name = "Menschlich"
        break
      }
      case SpeciesId.R_2: {
        this.name = "Elfisch"
        break
      }
      case SpeciesId.R_3: {
        this.name = "Halbelfisch"
        break
      }
      case SpeciesId.R_4: {
        this.name = "Zwergisch"
        break
      }
    }
  }
}