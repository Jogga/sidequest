import { Attribute, AttributeId } from "./Attribute"

export enum SkillId {
  TAL_1 = "TAL_1",
  TAL_2 = "TAL_2",
  TAL_3 = "TAL_3",
  TAL_4 = "TAL_4",
  TAL_5 = "TAL_5",
  TAL_6 = "TAL_6",
  TAL_7 = "TAL_7",
  TAL_8 = "TAL_8",
  TAL_9 = "TAL_9",
  TAL_10 = "TAL_10",
  TAL_11 = "TAL_11",
  TAL_12 = "TAL_12",
  TAL_13 = "TAL_13",
  TAL_14 = "TAL_14",
  TAL_15 = "TAL_15",
  TAL_16 = "TAL_16",
  TAL_17 = "TAL_17",
  TAL_18 = "TAL_18",
  TAL_19 = "TAL_19",
  TAL_20 = "TAL_20",
  TAL_21 = "TAL_21",
  TAL_22 = "TAL_22",
  TAL_23 = "TAL_23",
  TAL_24 = "TAL_24",
  TAL_25 = "TAL_25",
  TAL_26 = "TAL_26",
  TAL_27 = "TAL_27",
  TAL_28 = "TAL_28",
  TAL_29 = "TAL_29",
  TAL_30 = "TAL_30",
  TAL_31 = "TAL_31",
  TAL_32 = "TAL_32",
  TAL_33 = "TAL_33",
  TAL_34 = "TAL_34",
  TAL_35 = "TAL_35",
  TAL_36 = "TAL_36",
  TAL_37 = "TAL_37",
  TAL_38 = "TAL_38",
  TAL_39 = "TAL_39",
  TAL_40 = "TAL_40",
  TAL_41 = "TAL_41",
  TAL_42 = "TAL_42",
  TAL_43 = "TAL_43",
  TAL_44 = "TAL_44",
  TAL_45 = "TAL_45",
  TAL_46 = "TAL_46",
  TAL_47 = "TAL_47",
  TAL_48 = "TAL_48",
  TAL_49 = "TAL_49",
  TAL_50 = "TAL_50",
  TAL_51 = "TAL_51",
  TAL_52 = "TAL_52",
  TAL_53 = "TAL_53",
  TAL_54 = "TAL_54",
  TAL_55 = "TAL_55",
  TAL_56 = "TAL_56",
  TAL_57 = "TAL_57",
  TAL_58 = "TAL_58",
  TAL_59 = "TAL_59",
}

export enum SkillCategory {
  Koerpertalente = "Koerpertalente",
  Gesellschaftstalente = "Gesellschaftstalente",
  Naturtalente = "Naturtalente",
  Wissenstalente = "Wissenstalente",
  Handwerkstalente = "Handwerkstalente",
}

export class Skill {
  id: SkillId
  name: string
  category: SkillCategory
  attributes: Attribute[] = []
  value: Number

  constructor(id: string, attributes: Attribute[], value?: number) {
    this.id = SkillId[id as keyof typeof SkillId]
    this.value = value ?? 0

    switch(this.id) {
      case SkillId.TAL_1: {
        this.name = "Fliegen"
        this.category = SkillCategory.Koerpertalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_7, attributes)]
        break
      }
      case SkillId.TAL_2: {
        this.name = "Gaukeleien"
        this.category = SkillCategory.Koerpertalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes)]
        break
      }
      case SkillId.TAL_3: {
        this.name = "Klettern"
        this.category = SkillCategory.Koerpertalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_7, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_6, attributes)]
        break
      }
      case SkillId.TAL_4: {
        this.name = "Koerperbeherrschung"
        this.category = SkillCategory.Koerpertalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_7, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_7, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_5, attributes)]
        break
      }
      case SkillId.TAL_5: {
        this.name = "Kraftakt"
        this.category = SkillCategory.Koerpertalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_5, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_6, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_6, attributes)]
        break
      }
      case SkillId.TAL_6: {
        this.name = "Reiten"
        this.category = SkillCategory.Koerpertalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_7, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_6, attributes)]
        break
      }
      case SkillId.TAL_7: {
        this.name = "Schwimmen"
        this.category = SkillCategory.Koerpertalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_7, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_5, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_6, attributes)]
        break
      }
      case SkillId.TAL_8: {
        this.name = "Selbstbeherrschung"
        this.category = SkillCategory.Koerpertalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_5, attributes)]
        break
      }
      case SkillId.TAL_9: {
        this.name = "Singen"
        this.category = SkillCategory.Koerpertalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_5, attributes)]
        break
      }
      case SkillId.TAL_10: {
        this.name = "Sinnesschaerfe"
        this.category = SkillCategory.Koerpertalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes)]
        break
      }
      case SkillId.TAL_11: {
        this.name = "Tanzen"
        this.category = SkillCategory.Koerpertalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_7, attributes)]
        break
      }
      case SkillId.TAL_12: {
        this.name = "Taschendiebstahl"
        this.category = SkillCategory.Koerpertalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_7, attributes)]
        break
      }
      case SkillId.TAL_13: {
        this.name = "Verbergen"
        this.category = SkillCategory.Koerpertalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_7, attributes)]
        break
      }
      case SkillId.TAL_14: {
        this.name = "Zechen"
        this.category = SkillCategory.Koerpertalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_5, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_6, attributes)]
        break
      }
      case SkillId.TAL_15: {
        this.name = "Bekehren & Überzeugen"
        this.category = SkillCategory.Gesellschaftstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes)]
        break
      }
      case SkillId.TAL_16: {
        this.name = "Betoeren"
        this.category = SkillCategory.Gesellschaftstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes)]
        break
      }
      case SkillId.TAL_17: {
        this.name = "Einschuechtern"
        this.category = SkillCategory.Gesellschaftstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes)]
        break
      }
      case SkillId.TAL_18: {
        this.name = "Etikette"
        this.category = SkillCategory.Gesellschaftstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes)]
        break
      }
      case SkillId.TAL_19: {
        this.name = "Gassenwissen"
        this.category = SkillCategory.Gesellschaftstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes)]
        break
      }
      case SkillId.TAL_20: {
        this.name = "Menschenkenntnis"
        this.category = SkillCategory.Gesellschaftstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes)]
        break
      }
      case SkillId.TAL_21: {
        this.name = "Ueberreden"
        this.category = SkillCategory.Gesellschaftstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes)]
        break
      }
      case SkillId.TAL_22: {
        this.name = "Verkleiden"
        this.category = SkillCategory.Gesellschaftstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_7, attributes)]
        break
      }
      case SkillId.TAL_23: {
        this.name = "Willenskraft"
        this.category = SkillCategory.Gesellschaftstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes)]
        break
      }
      case SkillId.TAL_24: {
        this.name = "Faehrtensuchen"
        this.category = SkillCategory.Naturtalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_7, attributes)]
        break
      }
      case SkillId.TAL_25: {
        this.name = "Fesseln"
        this.category = SkillCategory.Naturtalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_6, attributes)]
        break
      }
      case SkillId.TAL_26: {
        this.name = "Fischen & Angeln"
        this.category = SkillCategory.Naturtalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_7, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_5, attributes)]
        break
      }
      case SkillId.TAL_27: {
        this.name = "Orientierung"
        this.category = SkillCategory.Naturtalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes)]
        break
      }
      case SkillId.TAL_28: {
        this.name = "Pflanzenkunde"
        this.category = SkillCategory.Naturtalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_5, attributes)]
        break
      }
      case SkillId.TAL_29: {
        this.name = "Tierkunde"
        this.category = SkillCategory.Naturtalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes)]
        break
      }
      case SkillId.TAL_30: {
        this.name = "Wildnisleben"
        this.category = SkillCategory.Naturtalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_7, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_5, attributes)]
        break
      }
      case SkillId.TAL_31: {
        this.name = "Brett- & Gluecksspiel"
        this.category = SkillCategory.Wissenstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes)]
        break
      }
      case SkillId.TAL_32: {
        this.name = "Geographie"
        this.category = SkillCategory.Wissenstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes)]
        break
      }
      case SkillId.TAL_33: {
        this.name = "Geschichtswissen"
        this.category = SkillCategory.Wissenstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes)]
        break
      }
      case SkillId.TAL_34: {
        this.name = "Goetter & Kulte"
        this.category = SkillCategory.Wissenstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes)]
        break
      }
      case SkillId.TAL_35: {
        this.name = "Kriegskunst"
        this.category = SkillCategory.Wissenstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes)]
        break
      }
      case SkillId.TAL_36: {
        this.name = "Magiekunde"
        this.category = SkillCategory.Wissenstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes)]
        break
      }
      case SkillId.TAL_37: {
        this.name = "Mechanik"
        this.category = SkillCategory.Wissenstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes)]
        break
      }
      case SkillId.TAL_38: {
        this.name = "Rechnen"
        this.category = SkillCategory.Wissenstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes)]
        break
      }
      case SkillId.TAL_39: {
        this.name = "Rechtskunde"
        this.category = SkillCategory.Wissenstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes)]
        break
      }
      case SkillId.TAL_40: {
        this.name = "Sagen & Legenden"
        this.category = SkillCategory.Wissenstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes)]
        break
      }
      case SkillId.TAL_41: {
        this.name = "Sphaerenkunde"
        this.category = SkillCategory.Wissenstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes)]
        break
      }
      case SkillId.TAL_42: {
        this.name = "Sternkunde"
        this.category = SkillCategory.Wissenstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes)]
        break
      }
      case SkillId.TAL_43: {
        this.name = "Alchimie"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes)]
        break
      }
      case SkillId.TAL_44: {
        this.name = "Boote & Schiffe"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_7, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_6, attributes)]
        break
      }
      case SkillId.TAL_45: {
        this.name = "Fahrzeuge"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_5, attributes)]
        break
      }
      case SkillId.TAL_46: {
        this.name = "Handeln"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes)]
        break
      }
      case SkillId.TAL_47: {
        this.name = "Heilkunde Gift"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes)]
        break
      }
      case SkillId.TAL_48: {
        this.name = "Heilkunde Krankheiten"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_1, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_5, attributes)]
        break
      }
      case SkillId.TAL_49: {
        this.name = "Heilkunde Seele"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_5, attributes)]
        break
      }
      case SkillId.TAL_50: {
        this.name = "Heilkunde Wunden"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes)]
        break
      }
      case SkillId.TAL_51: {
        this.name = "Holzbearbeitung"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_7, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_6, attributes)]
        break
      }
      case SkillId.TAL_52: {
        this.name = "Lebensmittelbearbeitung"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes)]
        break
      }
      case SkillId.TAL_53: {
        this.name = "Lederbearbeitung"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_7, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_5, attributes)]
        break
      }
      case SkillId.TAL_54: {
        this.name = "Malen & Zeichnen"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes)]
        break
      }
      case SkillId.TAL_55: {
        this.name = "Metallbearbeitung"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_5, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_6, attributes)]
        break
      }
      case SkillId.TAL_56: {
        this.name = "Musizieren"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_4, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_5, attributes)]
        break
      }
      case SkillId.TAL_57: {
        this.name = "Schloesserknacken"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_2, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes)]
        break
      }
      case SkillId.TAL_58: {
        this.name = "Steinbearbeitung"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_6, attributes)]
        break
      }
      case SkillId.TAL_59: {
        this.name = "Stoffbearbeitung"
        this.category = SkillCategory.Handwerkstalente
        this.attributes = [
          Attribute.getAttributeFromArray(AttributeId.ATTR_3, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes), 
          Attribute.getAttributeFromArray(AttributeId.ATTR_8, attributes)]
        break
      }
    }
  }
}