export enum ModificatorId {
  harder = "erschwert",
  easier = "erleichtert"
}

export class Modificator {
  type: ModificatorId = ModificatorId.easier
  value: number = 0
}