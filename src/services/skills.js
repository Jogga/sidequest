import { d20 } from "./dice"

export const attributes = {
  mu: "mu",
  in: "in",
  kl: "kl",
  ch: "ch",
  ko: "ko",
  kk: "kk",
  ge: "ge",
  ff: "ff"
}

export const skillz = [
  { name: "Fliegen", id: "TAL_1", attributes: [attributes.mu, attributes.in, attributes.ge]},
  { name: "Gaukeleien", id: "TAL_2", attributes: [attributes.mu, attributes.ch, attributes.ff]},
  { name: "Klettern", id: "TAL_3", attributes: [attributes.mu, attributes.ge, attributes.kk]},
  { name: "Koerperbeherrschung", id: "TAL_4", attributes: [attributes.mu, attributes.ge, attributes.kk]},
  { name: "Kraftakt", id: "TAL_5", attributes: [attributes.ko, attributes.kk, attributes.kk]},
  { name: "Reiten", id: "TAL_6", attributes: [attributes.ch, attributes.ge, attributes.kk]},
  { name: "Schwimmen", id: "TAL_7", attributes: [attributes.ge, attributes.ko, attributes.kk]},
  { name: "Selbstbeherrschung", id: "TAL_8", attributes: [attributes.mu, attributes.mu, attributes.ko]},
  { name: "Singen", id: "TAL_9", attributes: [attributes.kl, attributes.ch, attributes.ko]},
  { name: "Sinnesschaerfe", id: "TAL_10", attributes: [attributes.kl, attributes.in, attributes.in]},
  { name: "Tanzen", id: "TAL_11", attributes: [attributes.kl, attributes.ch, attributes.ge]},
  { name: "Taschendiebstahl", id: "TAL_12", attributes: [attributes.mu, attributes.ff, attributes.ge]},
  { name: "Verbergen", id: "TAL_13", attributes: [attributes.mu, attributes.in, attributes.ge]},
  { name: "Zechen", id: "TAL_14", attributes: [attributes.kl, attributes.ko, attributes.kk]},
  { name: "Bekehren & Überzeugen", id: "TAL_15", attributes: [attributes.mu, attributes.kl, attributes.ch]},
  { name: "Betoeren", id: "TAL_16", attributes: [attributes.mu, attributes.ch, attributes.ch]},
  { name: "Einschuechtern", id: "TAL_17", attributes: [attributes.mu, attributes.in, attributes.ch]},
  { name: "Etikette", id: "TAL_18", attributes: [attributes.kl, attributes.in, attributes.ch]},
  { name: "Gassenwissen", id: "TAL_19", attributes: [attributes.kl, attributes.in, attributes.ch]},
  { name: "Menschenkenntnis", id: "TAL_20", attributes: [attributes.kl, attributes.in, attributes.ch]},
  { name: "Ueberreden", id: "TAL_21", attributes: [attributes.mu, attributes.in, attributes.ch]},
  { name: "Verkleiden", id: "TAL_22", attributes: [attributes.in, attributes.ch, attributes.ge]},
  { name: "Willenskraft", id: "TAL_23", attributes: [attributes.mu, attributes.in, attributes.ch]},
  { name: "Faehrtensuchen", id: "TAL_24", attributes: [attributes.mu, attributes.in, attributes.ge]},
  { name: "Fesseln", id: "TAL_25", attributes: [attributes.kl, attributes.ff, attributes.kk]},
  { name: "Fischen & Angeln", id: "TAL_26", attributes: [attributes.ff, attributes.ge, attributes.ko]},
  { name: "Orientierung", id: "TAL_27", attributes: [attributes.kl, attributes.in, attributes.in]},
  { name: "Pflanzenkunde", id: "TAL_28", attributes: [attributes.kl, attributes.ff, attributes.ko]},
  { name: "Tierkunde", id: "TAL_29", attributes: [attributes.mu, attributes.mu, attributes.ch]},
  { name: "Wildnisleben", id: "TAL_30", attributes: [attributes.mu, attributes.ge, attributes.ko]},
  { name: "Brett- & Gluecksspiel", id: "TAL_31",  attributes: [attributes.kl, attributes.kl, attributes.in]},
  { name: "Geographie", id: "TAL_32",  attributes: [attributes.kl, attributes.kl, attributes.in]},
  { name: "Geschichtswissen", id: "TAL_33",  attributes: [attributes.kl, attributes.kl, attributes.in]},
  { name: "Goetter & Kulte", id: "TAL_34",  attributes: [attributes.kl, attributes.kl, attributes.in]},
  { name: "Kriegskunst", id: "TAL_35",  attributes: [attributes.mu, attributes.kl, attributes.in]},
  { name: "Magiekunde", id: "TAL_36",  attributes: [attributes.kl, attributes.kl, attributes.in]},
  { name: "Mechanik", id: "TAL_37",  attributes: [attributes.kl, attributes.kl, attributes.ff]},
  { name: "Rechnen", id: "TAL_38",  attributes: [attributes.kl, attributes.kl, attributes.in]},
  { name: "Rechtskunde", id: "TAL_39",  attributes: [attributes.kl, attributes.kl, attributes.in]},
  { name: "Sagen & Legenden", id: "TAL_40",  attributes: [attributes.kl, attributes.kl, attributes.in]},
  { name: "Sphaerenkunde", id: "TAL_41",  attributes: [attributes.kl, attributes.kl, attributes.in]},
  { name: "Sternkunde", id: "TAL_42",  attributes: [attributes.kl, attributes.kl, attributes.in]},
  { name: "Alchimie", id: "TAL_43", attributes: [attributes.mu, attributes.kl, attributes.ff]},
  { name: "Boote & Schiffe", id: "TAL_44", attributes: [attributes.ff, attributes.ge, attributes.kk]},
  { name: "Fahrzeuge", id: "TAL_45", attributes: [attributes.ch, attributes.fe, attributes.ko]},
  { name: "Handeln", id: "TAL_46", attributes: [attributes.kl, attributes.in, attributes.ch]},
  { name: "Heilkunde Gift", id: "TAL_47", attributes: [attributes.mu, attributes.kl, attributes.in]},
  { name: "Heilkunde Krankheiten", id: "TAL_48", attributes: [attributes.mu, attributes.in, attributes.ko]},
  { name: "Heilkunde Seele", id: "TAL_49", attributes: [attributes.in, attributes.ch, attributes.ko]},
  { name: "Heilkunde Wunden", id: "TAL_50", attributes: [attributes.kl, attributes.ff, attributes.ff]},
  { name: "Holzbearbeitung", id: "TAL_51", attributes: [attributes.ff, attributes.ge, attributes.kk]},
  { name: "Lebensmittelbearbeitung", id: "TAL_52", attributes: [attributes.in, attributes.ff, attributes.ff]},
  { name: "Lederbearbeitung", id: "TAL_53", attributes: [attributes.ff, attributes.ge, attributes.ko]},
  { name: "Malen & Zeichnen", id: "TAL_54", attributes: [attributes.in, attributes.ff, attributes.ff]},
  { name: "Metallbearbeitung", id: "TAL_55", attributes: [attributes.ff, attributes.ko, attributes.kk]},
  { name: "Musizieren", id: "TAL_56", attributes: [attributes.ch, attributes.ff, attributes.ko]},
  { name: "Schloesserknacken", id: "TAL_57", attributes: [attributes.in, attributes.ff, attributes.ff]},
  { name: "Steinbearbeitung", id: "TAL_58", attributes: [attributes.ff, attributes.ff, attributes.kk]},
  { name: "Stoffbearbeitung", id: "TAL_59", attributes: [attributes.kl, attributes.ff, attributes.ff]}
]

export const skills = [
  { name: "Körpertalente",
    list: [
      { name: "Fliegen", id: "TAL_1", attributes: [attributes.mu, attributes.in, attributes.ge]},
      { name: "Gaukeleien", id: "TAL_2", attributes: [attributes.mu, attributes.ch, attributes.ff]},
      { name: "Klettern", id: "TAL_3", attributes: [attributes.mu, attributes.ge, attributes.kk]},
      { name: "Koerperbeherrschung", id: "TAL_4", attributes: [attributes.mu, attributes.ge, attributes.kk]},
      { name: "Kraftakt", id: "TAL_5", attributes: [attributes.ko, attributes.kk, attributes.kk]},
      { name: "Reiten", id: "TAL_6", attributes: [attributes.ch, attributes.ge, attributes.kk]},
      { name: "Schwimmen", id: "TAL_7", attributes: [attributes.ge, attributes.ko, attributes.kk]},
      { name: "Selbstbeherrschung", id: "TAL_8", attributes: [attributes.mu, attributes.mu, attributes.ko]},
      { name: "Singen", id: "TAL_9", attributes: [attributes.kl, attributes.ch, attributes.ko]},
      { name: "Sinnesschaerfe", id: "TAL_10", attributes: [attributes.kl, attributes.in, attributes.in]},
      { name: "Tanzen", id: "TAL_11", attributes: [attributes.kl, attributes.ch, attributes.ge]},
      { name: "Taschendiebstahl", id: "TAL_12", attributes: [attributes.mu, attributes.ff, attributes.ge]},
      { name: "Verbergen", id: "TAL_13", attributes: [attributes.mu, attributes.in, attributes.ge]},
      { name: "Zechen", id: "TAL_14", attributes: [attributes.kl, attributes.ko, attributes.kk]},
    ]
  },
  { name: "Gesellschaftstalente",
    list: [
      { name: "Bekehren & Überzeugen", id: "TAL_15", attributes: [attributes.mu, attributes.kl, attributes.ch]},
      { name: "Betoeren", id: "TAL_16", attributes: [attributes.mu, attributes.ch, attributes.ch]},
      { name: "Einschuechtern", id: "TAL_17", attributes: [attributes.mu, attributes.in, attributes.ch]},
      { name: "Etikette", id: "TAL_18", attributes: [attributes.kl, attributes.in, attributes.ch]},
      { name: "Gassenwissen", id: "TAL_19", attributes: [attributes.kl, attributes.in, attributes.ch]},
      { name: "Menschenkenntnis", id: "TAL_20", attributes: [attributes.kl, attributes.in, attributes.ch]},
      { name: "Ueberreden", id: "TAL_21", attributes: [attributes.mu, attributes.in, attributes.ch]},
      { name: "Verkleiden", id: "TAL_22", attributes: [attributes.in, attributes.ch, attributes.ge]},
      { name: "Willenskraft", id: "TAL_23", attributes: [attributes.mu, attributes.in, attributes.ch]},
    ]
  },
  { name: "Naturtalente",
    list: [
      { name: "Faehrtensuchen", id: "TAL_24", attributes: [attributes.mu, attributes.in, attributes.ge]},
      { name: "Fesseln", id: "TAL_25", attributes: [attributes.kl, attributes.ff, attributes.kk]},
      { name: "Fischen & Angeln", id: "TAL_26", attributes: [attributes.ff, attributes.ge, attributes.ko]},
      { name: "Orientierung", id: "TAL_27", attributes: [attributes.kl, attributes.in, attributes.in]},
      { name: "Pflanzenkunde", id: "TAL_28", attributes: [attributes.kl, attributes.ff, attributes.ko]},
      { name: "Tierkunde", id: "TAL_29", attributes: [attributes.mu, attributes.mu, attributes.ch]},
      { name: "Wildnisleben", id: "TAL_30", attributes: [attributes.mu, attributes.ge, attributes.ko]},
    ]
  },
  { name: "Wissenstalente",
    list: [
      { name: "Brett- & Gluecksspiel", id: "TAL_31",  attributes: [attributes.kl, attributes.kl, attributes.in]},
      { name: "Geographie", id: "TAL_32",  attributes: [attributes.kl, attributes.kl, attributes.in]},
      { name: "Geschichtswissen", id: "TAL_33",  attributes: [attributes.kl, attributes.kl, attributes.in]},
      { name: "Goetter & Kulte", id: "TAL_34",  attributes: [attributes.kl, attributes.kl, attributes.in]},
      { name: "Kriegskunst", id: "TAL_35",  attributes: [attributes.mu, attributes.kl, attributes.in]},
      { name: "Magiekunde", id: "TAL_36",  attributes: [attributes.kl, attributes.kl, attributes.in]},
      { name: "Mechanik", id: "TAL_37",  attributes: [attributes.kl, attributes.kl, attributes.ff]},
      { name: "Rechnen", id: "TAL_38",  attributes: [attributes.kl, attributes.kl, attributes.in]},
      { name: "Rechtskunde", id: "TAL_39",  attributes: [attributes.kl, attributes.kl, attributes.in]},
      { name: "Sagen & Legenden", id: "TAL_40",  attributes: [attributes.kl, attributes.kl, attributes.in]},
      { name: "Sphaerenkunde", id: "TAL_41",  attributes: [attributes.kl, attributes.kl, attributes.in]},
      { name: "Sternkunde", id: "TAL_42",  attributes: [attributes.kl, attributes.kl, attributes.in]},
    ]
  },
  { name: "Handwerkstalente",
    list: [
      { name: "Alchimie", id: "TAL_43", attributes: [attributes.mu, attributes.kl, attributes.ff]},
      { name: "Boote & Schiffe", id: "TAL_44", attributes: [attributes.ff, attributes.ge, attributes.kk]},
      { name: "Fahrzeuge", id: "TAL_45", attributes: [attributes.ch, attributes.fe, attributes.ko]},
      { name: "Handeln", id: "TAL_46", attributes: [attributes.kl, attributes.in, attributes.ch]},
      { name: "Heilkunde Gift", id: "TAL_47", attributes: [attributes.mu, attributes.kl, attributes.in]},
      { name: "Heilkunde Krankheiten", id: "TAL_48", attributes: [attributes.mu, attributes.in, attributes.ko]},
      { name: "Heilkunde Seele", id: "TAL_49", attributes: [attributes.in, attributes.ch, attributes.ko]},
      { name: "Heilkunde Wunden", id: "TAL_50", attributes: [attributes.kl, attributes.ff, attributes.ff]},
      { name: "Holzbearbeitung", id: "TAL_51", attributes: [attributes.ff, attributes.ge, attributes.kk]},
      { name: "Lebensmittelbearbeitung", id: "TAL_52", attributes: [attributes.in, attributes.ff, attributes.ff]},
      { name: "Lederbearbeitung", id: "TAL_53", attributes: [attributes.ff, attributes.ge, attributes.ko]},
      { name: "Malen & Zeichnen", id: "TAL_54", attributes: [attributes.in, attributes.ff, attributes.ff]},
      { name: "Metallbearbeitung", id: "TAL_55", attributes: [attributes.ff, attributes.ko, attributes.kk]},
      { name: "Musizieren", id: "TAL_56", attributes: [attributes.ch, attributes.ff, attributes.ko]},
      { name: "Schloesserknacken", id: "TAL_57", attributes: [attributes.in, attributes.ff, attributes.ff]},
      { name: "Steinbearbeitung", id: "TAL_58", attributes: [attributes.ff, attributes.ff, attributes.kk]},
      { name: "Stoffbearbeitung", id: "TAL_59", attributes: [attributes.kl, attributes.ff, attributes.ff]},
    ]
  },
]

export const skillProbeResults = {
  criticalFailure: "Patzer!",
  criticalSuccess: "Meisterlich!",
  success: "Geschafft!",
  failure: "Fehlschlag!"
}

export function probeSkill(id, modificator, characterAttributes, characterSkillPoints) {
  let skillToProbe = skillz.filter(skill => skill.id === id)[0]
  let pointsLeft = characterSkillPoints

  // Get attributes
  const attributes = [
    characterAttributes[skillToProbe.attributes[0]],
    characterAttributes[skillToProbe.attributes[1]],
    characterAttributes[skillToProbe.attributes[2]]
  ]

  // Roll dice
  const rolls = [d20(), d20(), d20()]

  // Check patzer
  let criticalFailure = rolls.filter(roll => roll === 20).length > 1
  if (criticalFailure) {
    return { type: skillProbeResults.criticalFailure, rolls: rolls}
  }
  
  // Check perfect
  let criticalSuccess = rolls.filter(roll => roll === 1). length > 1
  if (criticalSuccess) {
    return { type: skillProbeResults.criticalSuccess, rolls: rolls}
  }

  // Compare rolls against attributes
  for (let i = 0; i < rolls.length; i++) {
    const roll = Number(rolls[i])
    const attribute = Number(attributes[i])
    const mod = Number(modificator)
    if (roll > (attribute + mod)) {
      pointsLeft -= (roll - (attribute + mod))
    }
  }

  if(pointsLeft >= 0) {
    return { type: skillProbeResults.success, rolls: rolls, pointsLeft: pointsLeft, qualtiyLevel: getQualityLevel(pointsLeft)}
  } else {
    return { type: skillProbeResults.failure, rolls: rolls }
  }
}

function getQualityLevel(skillPointsLeft) {
  if (skillPointsLeft < 4) return 1
  else if (skillPointsLeft < 7) return 2
  else if (skillPointsLeft < 10) return 3
  else if (skillPointsLeft < 13) return 4
  else if (skillPointsLeft < 16) return 5
  else return 6
}


/*

    let pointsLeft = points
    const roll0 = d20() 
    const roll1 = d20() 
    const roll2 = d20()
    if(roll0 > attr0.value) {
      pointsLeft -= roll0 - attr0.value
    }
    if(roll1 > attr1.value) {
      pointsLeft -= roll1 - attr1.value
    } 
    if(roll2 > attr2.value) {
      pointsLeft -= roll2 - attr2.value
    }
    if(pointsLeft >= 0) {
      setResult(`Success! First: ${roll0}, Second: ${roll1}, Third: ${roll2}. Points left: ${pointsLeft}`)
    } else {
      setResult(`Failed! First: ${roll0}, Second: ${roll1}, Third: ${roll2}.`)
    }

*/