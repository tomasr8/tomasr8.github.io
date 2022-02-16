import verbs from "./verbs.js"
import tenses from "./tenses.js"

function shuffle(array) {
  let currentIndex = array.length
  let randomIndex = 0

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
}

function getShuffledTenseData(tense) {
  const data = Object.entries(verbs).map(([verb, tenses]) => [
    verb,
    Object.fromEntries(
      Object.entries(tenses).map(([tense, conjugations]) => {
        return [tense, conjugations.map(person => person.map(({ text }) => text).join(""))]
      })
    ),
  ])

  shuffle(data)
  return data
}

function getCard(front, back) {
  const cardBack = back.map(item => `<div>${item}</div>`).join("\n")

  const card = `
    <div class="card">
      <article class="card-face card-face-front">${front}</article>
      <article class="card-face card-face-back">${cardBack}</article>
    </div>`

  const node = new DOMParser().parseFromString(card, "text/html").querySelector("div.card")
  return node
}

document.addEventListener("DOMContentLoaded", () => {
  const html = document.querySelector("html")
  const scene = document.querySelector("section.scene")
  let card = document.querySelector("section.scene div.card")
  const btn = document.getElementById("shuffle")
  const select = document.getElementById("tenses")
  const progress = document.querySelector("progress")

  let index = 0
  let tense = tenses[0]
  let data = getShuffledTenseData(tense)
  const maxValue = data.length

  tenses
    .map((name, i) => {
      const node = document.createElement("option")
      node.value = name
      node.innerHTML = name
      i === 0 && node.setAttribute("selected", "")
      return node
    })
    .forEach(node => select.appendChild(node))

  const [verb, { [tense]: conjugations }] = data[index]
  card = getCard(verb, conjugations)
  scene.appendChild(card)

  progress.max = maxValue
  progress.value = 0

  function setCard() {
    const [verb, { [tense]: conjugations }] = data[index]
    card.remove()
    card = getCard(verb, conjugations)
    scene.appendChild(card)
  }

  btn.addEventListener("click", () => {
    const tense = select.value
    progress.value = 0
    index = 0
    data = getShuffledTenseData(tense)
    setCard()
  })

  select.addEventListener("change", e => {
    tense = e.target.value
    if(!card.classList.contains("flipped")) {
      setCard()
    }
  })

  scene.addEventListener("click", () => {
    if (card.classList.contains("flipped")) {
      index = Math.min(index + 1, data.length - 1)
      setCard()
    } else {
      Math.min(progress.value + 1, maxValue)
      progress.value = Math.min(progress.value + 1, maxValue)
      card.classList.toggle("flipped")
    }
  })

  document.body.addEventListener("keydown", e => {
    if (e.repeat) {
      return
    }

    if (e.key === "ArrowLeft") {
      if (card.classList.contains("flipped")) {
        const [verb, { [tense]: conjugations }] = data[index]
        card.remove()
        progress.value = Math.max(progress.value - 1, 0)
        card = getCard(verb, conjugations)
        scene.appendChild(card)
      } else {
        card.classList.toggle("flipped")
        progress.value = Math.max(progress.value - 1, 0)
        index = Math.max(index - 1, 0)
        setCard()
      }
    } else if (e.key === "ArrowRight") {
      if (card.classList.contains("flipped")) {
        index = Math.min(index + 1, data.length - 1)
        setCard()
      } else {
        progress.value = Math.min(progress.value + 1, maxValue)
        card.classList.toggle("flipped")
      }
    }
  })
})
