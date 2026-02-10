// load vocabularies category
const loadVocabulariesCategory = async () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";

  const res = await fetch(url);
  const vocCategoriesData = await res.json();
  displayVocCategories(vocCategoriesData.data);
};

// display vocabularies categories
const displayVocCategories = (lessons) => {
  // get the container and empty the container
  const vocabularyContainer = document.getElementById("voccabularyContainer");
  vocabularyContainer.innerHTML = ""; // empty koira dichi

  // loop trought
  lessons.forEach((lesson) => {
    // create an element
    const btnDiv = document.createElement("div");
    // set inside
    btnDiv.innerHTML = `
        <button onclick="loadLevelWords(${lesson.level_no})" class="flex items-center gap-1 text-sm font-thin px-2 sm:px-4 py-1 sm:py-2.5 rounded-sm border border-zinc-700 hover:bg-zinc-300">
            <span>
                <i class="ri-booklet-line"></i>
            </span>
            <p>Lesson - ${lesson.level_no}</p>
        </button>
    `;

    // append into container
    vocabularyContainer.appendChild(btnDiv);
  });
};

// load levelWords data
const loadLevelWords = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWords(data.data));
};

// display level words
const displayLevelWords = (words) => {
  // get the container
  const cardContainer = document.getElementById("cardContainer");
  const levelContainer = document.getElementById("levelContainer");
  cardContainer.innerHTML = "";
  levelContainer.innerHTML = "";

  // loop trought
  words.forEach((word) => {
    // create an element
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
        <div
            class="bg-white rounded-lg sm:rounded-xl p-4 sm:p-14 border-2 border-stone-100 text-center"
            >
            <div class="space-y-4 sm:space-y-6">
                <h1 class="text-zinc-800 text-3xl font-semibold">${word.word}</h1>
                <h4 class="text-zinc-800 text-xl font-medium">
                Meaning / Pronounciation
                </h4>
                <h2
                lang="bn"
                class="text-zinc-900 opacity-80 text-2xl sm:text-3xl font-semibold"
                >
                "${word.meaning} / ${word.pronunciation}"
                </h2>
            </div>
            <div class="mt-14 flex items-center justify-between">
                <div
                class="cursor-pointer px-4 py-2 rounded-md bg-zinc-500/10 transition-all hover:bg-zinc-700/20"
                >
                <span
                    ><i class="ri-information-line text-slate-700 text-2xl"></i
                ></span>
                </div>
                <div
                class="cursor-pointer px-4 py-2 rounded-md bg-zinc-500/10 transition-all hover:bg-zinc-700/20"
                >
                <span
                    ><i class="ri-volume-up-line text-slate-700 text-2xl"></i
                ></span>
                </div>
            </div>
        </div>
    `;

    // apendchinld
    cardContainer.appendChild(cardDiv);
  });
};

/**
 * {
    "id": 74,
    "level": 1,
    "word": "Dog",
    "meaning": "কুকুর",
    "pronunciation": "ডগ"
}
 */

loadVocabulariesCategory();
