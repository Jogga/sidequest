function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1
}

export function d20() {
  return getRandomInt(20)
}

export function d6() {
  return getRandomInt(6)
}