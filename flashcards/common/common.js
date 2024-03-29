function shuffle(array) {
  let currentIndex = array.length
  let randomIndex = 0

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
}

function getShuffledTenseData(verbs) {
  const data = Object.entries(verbs).map(([verb, tenses]) => [
    verb,
    Object.fromEntries(
      Object.entries(tenses)
        .map(([tense, conjugations]) => {
          return tense !== "_translations"
            ? [tense, conjugations.map(person => person.map(({ text }) => text).join(""))]
            : [tense, conjugations]
        })
    ),
  ])

  shuffle(data)
  return data
}

function getCard(verb, conjugations, translations) {
  const emojiMap = {
    italian: "🇮🇹",
    english: "🇬🇧",
    french: "🇫🇷",
  }

  translations = Object.entries(translations)
    .map(([language, trs]) => `<div class="translation">${emojiMap[language]} ${trs.join(", ")}</div>`)
    .join("")
  const cardFront = `<div class="verb">${verb}</div><div>${translations}</div>`
  const cardBack = conjugations.map(item => `<div>${item}</div>`).join("\n")

  const card = `
    <div class="card">
      <article class="card-face card-face-front">${cardFront}</article>
      <article class="card-face card-face-back">${cardBack}</article>
    </div>`

  const node = new DOMParser().parseFromString(card, "text/html").querySelector("div.card")
  return node
}

export default function (verbs, tenses) {
  const scene = document.querySelector("section.scene")
  let card = document.querySelector("section.scene div.card")
  const btn = document.getElementById("shuffle")
  const select = document.getElementById("tenses")
  const progress = document.querySelector("progress")

  let index = 0
  let tense = tenses[0]
  let data = getShuffledTenseData(verbs)
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

  const [verb, { [tense]: conjugations, _translations: translations = {} }] = data[index]
  card = getCard(verb, conjugations, translations)
  scene.appendChild(card)

  progress.max = maxValue
  progress.value = 0

  function setCard() {
    const [verb, { [tense]: conjugations, _translations: translations = {} }] = data[index]
    card.remove()
    card = getCard(verb, conjugations, translations)
    scene.appendChild(card)
  }

  btn.addEventListener("click", () => {
    const tense = select.value
    progress.value = 0
    index = 0
    data = getShuffledTenseData(verbs)
    setCard()
  })

  select.addEventListener("change", e => {
    tense = e.target.value
    if (!card.classList.contains("flipped")) {
      setCard()
    }
  })

  scene.addEventListener("click", e => {
    const pos = e.clientX / window.innerWidth

    if (pos < 0.5) {
      if (card.classList.contains("flipped")) {
        const [verb, { [tense]: conjugations, _translations: translations = {} }] = data[index]
        card.remove()
        progress.value = Math.max(progress.value - 1, 0)
        card = getCard(verb, conjugations, translations)
        scene.appendChild(card)
      } else {
        card.classList.toggle("flipped")
        progress.value = Math.max(progress.value - 1, 0)
        index = Math.max(index - 1, 0)
        setCard()
      }
    } else {
      if (card.classList.contains("flipped")) {
        index = Math.min(index + 1, data.length - 1)
        setCard()
      } else {
        progress.value = Math.min(progress.value + 1, maxValue)
        card.classList.toggle("flipped")
      }
    }
  })

  document.body.addEventListener("keydown", e => {
    if (e.repeat) {
      return
    }

    if (e.key === "ArrowLeft") {
      if (card.classList.contains("flipped")) {
        const [verb, { [tense]: conjugations, _translations: translations = {} }] = data[index]
        card.remove()
        progress.value = Math.max(progress.value - 1, 0)
        card = getCard(verb, conjugations, translations)
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
}
