function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex = 0;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

class CardManager {
  constructor({ scene, loadBtn }, provider) {
    this.scene = scene;
    this.loadBtn = loadBtn;
    this.provider = provider;
    this.index = 0;
    this.phrases = [];
  }

  setupListeners() {
    this.loadBtn.addEventListener("click", async () => {
      const sourceLang = document.getElementById("sourceLang").value;
      const targetLang = document.getElementById("targetLang").value;

      if (!sourceLang || !targetLang) {
        return;
      }

      this.index = 0;
      this.phrases = await this.provider.loadLanguagePair(sourceLang, targetLang);
      this.resetCard(this.phrases[this.index]);
    });

    this.scene.addEventListener("click", (e) => {
      if (this.phrases.length === 0) {
        return;
      }

      const pos = e.clientX / window.innerWidth;
      if (pos < 0.5) {
        this.advanceLeft();
      } else {
        this.advanceRight();
      }
    });

    document.body.addEventListener("keydown", (e) => {
      if (e.repeat || this.phrases.length === 0) {
        return;
      }

      if (e.key === "ArrowLeft") {
        this.advanceLeft();
      } else if (e.key === "ArrowRight") {
        this.advanceRight();
      }
    });
  }

  resetCard(phrase) {
    this.scene.replaceChildren();
    this.scene.replaceChildren(this.makePhrase(phrase));
  }

  makePhrase(phrase) {
    const card = `
      <article class="card">
        <div id="original">${phrase.original}</div>
        <div id="translation" class="hidden">
          <span>
            ${phrase.translated}
          </span>
        </div>
      </article>`;

    const node = new DOMParser()
      .parseFromString(card, "text/html")
      .querySelector("article.card");
    return node;
  }

  advanceLeft() {
    const translationEl = this.scene.querySelector("#translation");

    if (translationEl.classList.contains("hidden")) {
      this.index = Math.max(this.index - 1, 0);
      this.resetCard(this.phrases[this.index]);
    } else {
      translationEl.classList.toggle("hidden");
    }
  }

  advanceRight() {
    const translationEl = this.scene.querySelector("#translation");

    if (!translationEl.classList.contains("hidden")) {
      this.index = Math.min(this.index + 1, this.phrases.length - 1);
      this.resetCard(this.phrases[this.index]);
    } else {
      translationEl.classList.toggle("hidden");
    }
  }
}

class TranslationProvider {
  constructor(file) {
    this.file = file;
    this.meta = null;
  }

  async init() {
    await fetch(this.file)
      .then((res) => res.json())
      .then((json) => (this.meta = json));
  }

  async loadLanguagePair(sourceLang, targetLang) {
    const files = this.meta[`${sourceLang}-${targetLang}`];
    const index = Math.floor(Math.random() * files);
    return await fetch(`data/${sourceLang}-${targetLang}-${index}.json`)
      .then((res) => res.json())
      .then((phrases) => shuffle(phrases));
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const scene = document.querySelector(".scene");
  const loadBtn = document.getElementById("load");
  const provider = new TranslationProvider("data/meta.json");
  await provider.init();
  const manager = new CardManager({ scene, loadBtn }, provider);
  manager.setupListeners();
});
