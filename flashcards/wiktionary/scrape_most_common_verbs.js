const fs = require("fs")
const axios = require("axios")
const { parse } = require("node-html-parser")

function wait(secs) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), secs * 1000)
  })
}

function getPronouns() {
  return ["já ", "ty ", "on/ona/ono ", "my ", "vy ", "oni/ony "]
}

function getPage() {
  return axios
    .get(
      `https://cs.wiktionary.org/wiki/P%C5%99%C3%ADloha:Frekven%C4%8Dn%C3%AD_seznam_(%C4%8De%C5%A1tina)/%C4%8CNK_SYN2005/1-1000`
    )
    .then(res => {
      if (res.status !== 200) {
        throw new Error(`Could not fetch; status: ${res.status}`)
      }

      return parse(res.data)
    })
}

function getConjugationPage(verb) {
  return axios.get(encodeURI(`https://cs.wiktionary.org/wiki/${verb}`)).then(res => {
    if (res.status !== 200) {
      throw new Error(`Could not fetch; status: ${res.status}`)
    }

    return parse(res.data)
  })
}

function getPresentTense(rootElem) {
  const tables = [...rootElem.querySelectorAll("table.konjugace.verbum")]
  const present = tables.find(table => table.querySelector("caption").innerText.trim() === "Oznamovací způsob")
  const conjugations = [...present.querySelectorAll("tbody tr:last-child td")].map(a => a.innerText.trim())
  return conjugations.map(c => {
    const split = c.split(" ")
    if(split.length === 2 && (split[1] === "se" || split[1] === "si")) {
      return [split[1], split[0]].join(" ")
    } else {
      return c
    }
  })
}

function getTranslations(rootElem) {
  let translations = [...rootElem.querySelectorAll(".translations li")]
  translations.forEach(tr => {
    [...tr.querySelectorAll("abbr")].forEach(abbr => tr.removeChild(abbr))
  })
  translations = translations.map(tr => tr.innerText.trim())

  const cleanup = (trs, caption) => [
    ...new Set(
      trs
        .map(tr => tr.replace(caption, "").replace("&#160;", ""))
        .map(tr => tr.split(", "))
        .flat()
    ),
  ]

  const italian = translations.filter(tr => tr.startsWith("italština: "))
  const english = translations.filter(tr => tr.startsWith("angličtina: "))
  const french = translations.filter(tr => tr.startsWith("francouzština: "))
  return {
    italian: cleanup(italian, "italština: "),
    english: cleanup(english, "angličtina: "),
    french: cleanup(french, "francouzština: "),
  }
}

async function scrape() {
  const rootElem = await getPage()

  const wordLinks = [...rootElem.querySelectorAll(`div.mw-parser-output p a[href^="/wiki/"]`)]
  const verbs = wordLinks
    .map(link => link.innerText)
    .filter(text => {
      const words = text.split(" ")
      if (words[0][words[0].length - 1] == "t") {
        return true
      }
    })

  // fs.writeFileSync("verbs.json", JSON.stringify(verbs, null, 2), "utf-8")
}

async function scrapeConjugations(verbs) {
  const data = {}

  const pronouns = getPronouns()

  for (const verb of verbs) {
    console.log(verb)
    const rootElem = await getConjugationPage(verb)
    const conjugations = getPresentTense(rootElem)
    console.log(conjugations)
    const translations = getTranslations(rootElem)
    console.log(translations)

    data[verb] = {
      "Oznamovací způsob": conjugations.map((c, i) => [
        { text: pronouns[i], className: "graytxt" },
        { text: c, className: "verbtxt" },
      ]),
      _translations: translations,
    }

    await wait(1)
  }

  fs.writeFileSync("verbs.json", JSON.stringify(data, null, 2), "utf-8")
}

// scrape()

const verbs = JSON.parse(fs.readFileSync("verbList.json"))
scrapeConjugations(verbs)
