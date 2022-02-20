const fs = require("fs");
const axios = require("axios");
const { parse } = require("node-html-parser");

const sectionNames = [
  "Indicatif Présent",
  "Indicatif Imparfait",
  "Indicatif Futur",
  "Indicatif Passé simple",
  "Indicatif Passé composé",
  "Indicatif Plus-que-parfait",
  "Indicatif Passé antérieur",
  "Indicatif Futur antérieur",
  "Subjonctif Présent",
  "Subjonctif Imparfait",
  "Subjonctif Plus-que-parfait",
  "Subjonctif Passé",
  "Conditionnel Présent",
  "Conditionnel Passé première forme",
  "Conditionnel Passé deuxième forme",
  "Participe Présent",
  "Participe Passé composé",
  "Participe Passé",
  "Impératif Présent",
  "Impératif Passé",
  "Infinitif Présent",
  "Infinitif Passé",
];

const verbs = [
  ...new Set([
    "acheter",
    "aider",
    "aller",
    "amener",
    "apporter",
    "apprendre",
    "arriver",
    "attendre",
    "avoir",
    "bavarder",
    "boire",
    "changer",
    "chanter",
    "chercher",
    "commander",
    "commencer",
    "comprendre",
    "conduire",
    "connaître",
    "courir",
    "croire",
    "cuisiner",
    "danser",
    "décider",
    "demander",
    "déménager",
    "dépenser",
    "descendre",
    "dire",
    "donner",
    "dormir",
    "écouter",
    "écrire",
    "enlever",
    "entendre",
    "envoyer",
    "essayer",
    "être",
    "étudier",
    "faire",
    "fermer",
    "finir",
    "gagner",
    "gaspiller",
    "goûter",
    "habiter",
    "introduire",
    "inviter",
    "jouer",
    "laisser",
    "laver",
    "lire",
    "manger",
    "marcher",
    "mettre",
    "nettoyer",
    "obtenir",
    "oublier",
    "ouvrir",
    "partir",
    "parler",
    "passer",
    "payer",
    "penser",
    "perdre",
    "porter",
    "prendre",
    "préparer",
    "quitter",
    "recevoir",
    "recommander",
    "regarder",
    "remplir",
    "rendre",
    "réparer",
    "répondre",
    "rire",
    "retourner",
    "savoir",
    "se coucher",
    "se laver",
    "se lever",
    "se reposer",
    "se souvenir",
    "signer",
    "s'inquiéter",
    "suivre",
    "trouver",
    "s'asseoir",
    "tomber",
    "travailler",
    "utilise",
    "vendre",
    "venir",
    "visiter",
    "voyager",
    "vouloir",
    "voir",
    // ===============
    "être",
    "avoir",
    "pouvoir",
    "faire",
    "mettre",
    "dire",
    "devoir",
    "prendre",
    "donner",
    "aller",
    "vouloir",
    "savoir",
    "falloir",
    "voir",
    "demander",
    "trouver",
    "rendre",
    "venir",
    "passer",
    "comprendre",
    "rester",
    "tenir",
    "porter",
    "parler",
    "montrer",
    "continuer",
    "penser",
    "suivre",
    "connaître",
    "croire",
    "commencer",
    "compter",
    "entendre",
    "attendre",
    "remettre",
    "appeler",
    "permettre",
    "occuper",
    "devenir",
    "partir",
    "décider",
    "arriver",
    "servir",
    "sembler",
    "revenir",
    "laisser",
    "recevoir",
    "répondre",
    "vivre",
    "rappeler",
    "présenter",
    "accepter",
    "agir",
    "poser",
    "jouer",
    "reconnaître",
    "choisir",
    "toucher",
    "aimer",
    "retrouver",
    "perdre",
    "expliquer",
    "considérer",
    "ouvrir",
    "gagner",
    "exister",
    "refuser",
    "lire",
    "réussir",
    "changer",
    "travailler",
    "représenter",
    "assurer",
    "essayer",
    "empêcher",
    "sortir",
    "reprendre",
    "mener",
    "appartenir",
    "risquer",
    "concerner",
    "apprendre",
    "rencontrer",
    "créer",
    "obtenir",
    "chercher",
    "entrer",
    "proposer",
    "apporter",
    "utiliser",
    "atteindre",
    "tenter",
    "importer",
    "ajouter",
    "produire",
    "préparer",
    "relever",
    "écrire",
    "défendre",
    "tirer",
  ]),
];

console.log("LENGTH", verbs.length);

function getSection(sectionName, rootElem) {
  const section = rootElem.querySelector(`div[mobile-title="${sectionName}"]`);
  if (section === null) {
    return [];
  }
  const elems = [...section.querySelectorAll("ul li")];

  return elems
    .map((node) => [...node.querySelectorAll("i")])
    .map((nodes) =>
      nodes.map((node) => {
        return {
          text: node.innerText,
          className: [...node.classList._set][0],
        };
      })
    );
}

function getSections(sectionNames, rootElem) {
  return sectionNames.reduce((obj, name) => {
    obj[name] = getSection(name, rootElem);
    return obj;
  }, {});
}

function getPage(verb) {
  return axios
    .get(`https://conjugator.reverso.net/conjugation-french-verb-${verb}.html`)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(`Could not fetch; status: ${res.status}`);
      }

      return parse(res.data);
    });
}

function wait(secs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), secs * 1000);
  });
}

async function scrape(verbs, sectionNames) {
  const results = {};

  for (const verb of verbs) {
    const rootElem = await getPage(verb);
    const sections = getSections(sectionNames, rootElem);
    results[verb] = sections;
    console.log("Done with", verb);
    await wait(0.5);
  }

  fs.writeFileSync("verbs.json", JSON.stringify(results, null, 2), "utf-8");
}

scrape(verbs, sectionNames);
