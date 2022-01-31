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

export const skills = [
  { name: "Körpertalente",
    list: [
      { name: "Fliegen", attributes: [attributes.mu, attributes.in, attributes.ge]},
      { name: "Gaukeleien", attributes: [attributes.mu, attributes.ch, attributes.ff]},
      { name: "Klettern", attributes: [attributes.mu, attributes.ge, attributes.kk]},
      { name: "Koerperbeherrschung", attributes: [attributes.mu, attributes.ge, attributes.kk]},
      { name: "Kraftakt", attributes: [attributes.ko, attributes.kk, attributes.kk]},
      { name: "Reiten", attributes: [attributes.ch, attributes.ge, attributes.kk]},
      { name: "Schwimmen", attributes: [attributes.ge, attributes.ko, attributes.kk]},
      { name: "Selbstbeherrschung", attributes: [attributes.mu, attributes.mu, attributes.ko]},
      { name: "Singen", attributes: [attributes.kl, attributes.ch, attributes.ko]},
      { name: "Sinnesschaerfe", attributes: [attributes.kl, attributes.in, attributes.in]},
      { name: "Tanzen", attributes: [attributes.kl, attributes.ch, attributes.ge]},
      { name: "Taschendiebstahl", attributes: [attributes.mu, attributes.ff, attributes.ge]},
      { name: "Verbergen", attributes: [attributes.mu, attributes.in, attributes.ge]},
      { name: "Zechen", attributes: [attributes.kl, attributes.ko, attributes.kk]},
    ]
  },
  { name: "Gesellschaftstalente",
    list: [
      { name: "Bekehren & Überzeugen", attributes: [attributes.mu, attributes.kl, attributes.ch]},
    ]
  },
]