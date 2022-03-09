function shuffle(array) {
    let currentIndex = array.length
    let randomIndex = 0
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
  }
  
  function getShuffledWordData(words) {
    Object.keys(words).forEach(key => {
        shuffle(words[key])
    })
    return words
  }
  
  function getCard(original, translated) {
    const cardFront = `<div class="verb">${original}</div>`
    const cardBack = `<div>${translated}</div>`
  
    const card = `
      <div class="card">
        <article class="card-face card-face-front">${cardFront}</article>
        <article class="card-face card-face-back">${cardBack}</article>
      </div>`
  
    const node = new DOMParser().parseFromString(card, "text/html").querySelector("div.card")
    return node
  }
  
  export default function (words, categories) {
    const scene = document.querySelector("section.scene")
    let card = document.querySelector("section.scene div.card")
    const btn = document.getElementById("shuffle")
    const select = document.getElementById("tenses")
    const progress = document.querySelector("progress")
  
    let index = 0
    let category = categories[0]
    let data = getShuffledWordData(words)
    const maxValue = data[category].length
  
    categories
      .map((name, i) => {
        const node = document.createElement("option")
        node.value = name
        node.innerHTML = name
        i === 0 && node.setAttribute("selected", "")
        return node
      })
      .forEach(node => select.appendChild(node))
  
    const [original, translated] = data[category][index]
    card = getCard(original, translated)
    scene.appendChild(card)
  
    progress.max = maxValue
    progress.value = 0
  
    function setCard() {
      const [original, translated] = data[category][index]
      card.remove()
      card = getCard(original, translated)
      scene.appendChild(card)
    }
  
    btn.addEventListener("click", () => {
      progress.value = 0
      index = 0
      data = getShuffledWordData(words)
      setCard()
    })
  
    select.addEventListener("change", e => {
      category = e.target.value
      if (!card.classList.contains("flipped")) {
        setCard()
      }
    })
  
    scene.addEventListener("click", e => {
      const pos = e.clientX / window.innerWidth
  
      if (pos < 0.5) {
        if (card.classList.contains("flipped")) {
          const [original, translated] = data[category][index]
          card.remove()
          progress.value = Math.max(progress.value - 1, 0)
          card = getCard(original, translated)
          scene.appendChild(card)
        } else {
          card.classList.toggle("flipped")
          progress.value = Math.max(progress.value - 1, 0)
          index = Math.max(index - 1, 0)
          setCard()
        }
      } else {
        if (card.classList.contains("flipped")) {
          index = Math.min(index + 1, data[category].length - 1)
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
          const [original, translated] = data[category][index]
          card.remove()
          progress.value = Math.max(progress.value - 1, 0)
          card = getCard(original, translated)
          scene.appendChild(card)
        } else {
          card.classList.toggle("flipped")
          progress.value = Math.max(progress.value - 1, 0)
          index = Math.max(index - 1, 0)
          setCard()
        }
      } else if (e.key === "ArrowRight") {
        if (card.classList.contains("flipped")) {
          if(index === data[category].length) {
            return
          }
          index = Math.min(index + 1, data[category].length - 1)
          setCard()
        } else {
          progress.value = Math.min(progress.value + 1, maxValue)
          card.classList.toggle("flipped")
        }
      }
    })
  }
  