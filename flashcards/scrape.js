const fs = require("fs")
const axios = require("axios")
const { parse } = require("node-html-parser")

const sectionNames = [
  "Indicativo Presente",
  "Indicativo Imperfetto",
  "Indicativo Passato remoto",
  "Indicativo Futuro semplice",
  "Indicativo Passato prossimo",
  "Indicativo Trapassato prossimo",
  "Indicativo Trapassato remoto",
  "Indicativo Futuro anteriore",
  "Congiuntivo Presente",
  "Congiuntivo Passato",
  "Congiuntivo Imperfetto",
  "Congiuntivo Trapassato",
  "Condizionale Presente",
  "Condizionale Passato",
  "Imperativo Presente",
  "Gerundio Presente",
  "Gerundio Passato",
  "Infinito Presente",
  "Participio Presente",
  "Participio Passato",
]

const verbs = [
  "essere",
  "avere",
  "potere",
  "fare",
  "dire",
  "venire",
  "dovere",
  "dare",
  "andare",
  "vedere",
  "parlare",
  "pensare",
  "trovare",
  "ottenere",
  "partire",
  "mettere",
  "prendere",
  "vivere",
  "ricordare",
  "passare",
  "credere",
  "raggiungere",
  "tenere",
  "creare",
  "rispondere",
  "cercare",
  "diventare",
  "lasciare",
  "pagare",
  "accettare",
  "chiedere",
  "presentare",
  "parere",
  "arrivare",
  "uscire",
  "lavorare",
  "usare",
  "continuare",
  "tornare",
  "perdere",
  "rimanere",
  "cogliere",
  "volere",
  "offrire",
  "condurre",
  "guardare",
  "chiamare",
  "valere",
  "trarre",
  "provare",
  "cominciare",
  "decidere",
  "riuscire",
  "dimenticare",
  "restare",
  "discutere",
  "ripetere",
  "aprire",
  "esistere",
  "togliere",
  "crescere",
  "cambiare",
  "ritornare",
  "mancare",
  "vincere",
  "preparare",
  "mangiare",
  "correre",
  "piacere",
  "godere",
  "amare",
  "aspettare",
  "chiudere",
  "aiutare",
  "mandare",
  "iniziare",
  "ascoltare",
  "temere",
  "muovere",
  "incontrare",
  "imparare",
  "visitare",
  "insegnare",
  "raccontare",
  "ridere",
  "correggere",
  "coprire",
  "tacere",
  "bere",
  "rompere",
  "uccidere",
  "inviare",
  "cantare",
  "giocare",
  "dividere",
  "nascondere",
  "camminare",
  "guidare",
  "piangere",
  "guadagnare",
]

function getSection(sectionName, rootElem) {
  const section = rootElem.querySelector(`div[mobile-title="${sectionName}"]`)
  const elems = [...section.querySelectorAll("ul li")]

  return elems
    .map(node => [...node.querySelectorAll("i")])
    .map(nodes =>
      nodes.map(node => {
        return {
          text: node.innerText,
          className: [...node.classList._set][0],
        }
      })
    )
}

function getSections(sectionNames, rootElem) {
  return sectionNames.reduce((obj, name) => {
    obj[name] = getSection(name, rootElem)
    return obj
  }, {})
}

function getPage(verb) {
  return axios
    .get(`https://conjugator.reverso.net/conjugation-italian-verb-${verb}.html`)
    .then(res => {
      if (res.status !== 200) {
        throw new Error(`Could not fetch; status: ${res.status}`)
      }

      return parse(res.data)
    })
}

function wait(secs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), secs * 1000)
  })
}

async function scrape(verbs, sectionNames) {
  const results = {}

  for (const verb of verbs) {
    const rootElem = await getPage(verb)
    const sections = getSections(sectionNames, rootElem)
    results[verb] = sections
    console.log("Done with", verb)
    await wait(0.5)
  }

  fs.writeFileSync("verbs.json", JSON.stringify(results, null, 2), "utf-8")
}

scrape(verbs, sectionNames)
