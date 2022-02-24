import { d20 } from "./dice"

// List of Attributes
export const attributes = {
  ATTR_1: { name: "mu" },
  ATTR_2: { name: "in" },
  ATTR_3: { name: "kl" },
  ATTR_4: { name: "ch" },
  ATTR_5: { name: "ko" },
  ATTR_6: { name: "kk" },
  ATTR_7: { name: "ge" },
  ATTR_8: { name: "ff" }
}

export const attributeProbeResults = {
  criticalFailure: "Patzer!",
  incredibleFailure: "Doppelpatzer!",
  criticalSuccess: "Meisterlich!",
  incredibleSuccess: "Doppelt meisterlich!",
  success: "Geschafft!",
  failure: "Fehlschlag!"
}

// Attribute Probe
export function probeAttribute(id, modificator, characterAttributes) {
  let attributeValue = characterAttributes[id].value

  const roll = d20()
  const result = attributeValue - roll + modificator

  if (roll === 1) {

    // Meisterlich?
    const roll2 = d20()
    const result2 = attributeValue - roll2 + modificator

    if (roll2 === 1) {

      // Doppelt meisterlich!
      return { type: attributeProbeResults.incredibleSuccess, rolls: [roll, roll2] }
    } else if (result2 >= 0) {

      // Meisterlich!
      return { type: attributeProbeResults.criticalSuccess, rolls: [roll, roll2] }
    } else {

      // Nicht meisterlich.
      return { type: attributeProbeResults.success, rolls: [roll, roll2] }
    }
  } else if (roll === 20) {

    // Patzer?
    const roll2 = d20()
    const result2 = attributeValue - roll2 + modificator

    if (roll2 === 20) {

      // Doppelpatzer!
      return { type: attributeProbeResults.incredibleFailure, rolls: [roll, roll2] }
    } else if (result2 < 0) {

      // Patzer!
      return { type: attributeProbeResults.criticalFailure, rolls: [roll, roll2] }
    } else {

      // Nicht gepatzt.
      return { type: attributeProbeResults.failure, rolls: [roll, roll2] }
    }
  } else if (result >= 0) {

    // Geschafft.
    return { type: attributeProbeResults.success, rolls: [roll] }
  } else {

    // Nicht geschafft.
    return { type: attributeProbeResults.failure, rolls: [roll] }
  }
}
