// load vocabularies category
const loadVocabulariesCategory = async () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";

  const res = await fetch(url);
  const vocCategoriesData = await res.json();
  displayVocCategories(vocCategoriesData.data);
};

function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
}

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
        <button id="lesson_btn_${lesson.level_no}" onclick="loadLevelWords(${lesson.level_no})" class="flex items-center gap-1 text-sm font-thin px-2 sm:px-4 py-1 sm:py-2.5 rounded-sm bg-zinc-200 hover:bg-zinc-400/60 lesson_button">
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

// remove active class from lesson btn
const removeActiveClass = () => {
  const lessonBtns = document.querySelectorAll(".lesson_button");
  lessonBtns.forEach((btn) => btn.classList.remove("lesson_btn_acive"));
};

// load levelWords data
const loadLevelWords = (id) => {
  manageLoading(true);
  const url = `https://openapi.programming-hero.com/api/level/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActiveClass();
      const clickedBtn = document.getElementById(`lesson_btn_${id}`);
      clickedBtn.classList.add("lesson_btn_acive");
      displayLevelWords(data.data);
    });
};

// display level words
const displayLevelWords = (words) => {
  // get the container
  const levelContainer = document.getElementById("levelContainer");
  levelContainer.innerHTML = "";

  // if words is empty
  if (words.length === 0) {
    levelContainer.innerHTML = `
        <div
            class="bg-stone-50 border border-zinc-200 rounded-3xl px-4 py-16 col-span-full"
            >
            <div class="text-center space-y-3">
            <div class="">
                <span
                ><i
                    class="ri-folder-warning-line text-5xl sm:text-8xl text-stone-500"
                ></i
                ></span>
            </div>

            <h4 lang="bn" class="text-stone-500 text-sm font-thin">
                এই <span lang="en">Lesson</span> এ এখনো কোন <span lang="en">Vocabulary</span> যুক্ত করা হয়নি।
            </h4>
            <h1
                lang="bn"
                class="text-2xl sm:text-4xl text-stone-800 font-thin"
            >
                নেক্সট <span lang="en">Lesson</span> এ যান
            </h1>
            </div>
        </div>  
    `;
    manageLoading(false);
    return;
  }

  // loop trought
  words.forEach((word) => {
    // create an element
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
        <div
            class="bg-white rounded-lg sm:rounded-xl p-4 sm:p-14 border-2 border-stone-100 text-center"
            >
            <div class="space-y-4 sm:space-y-6">
                <h1 class="text-zinc-800 text-3xl font-semibold">${word.word ? word.word : "N/A"}</h1>
                <h4 class="text-zinc-800 text-xl font-medium">
                Meaning / Pronounciation
                </h4>
                <h2
                lang="bn"
                class="text-zinc-900 opacity-80 text-2xl sm:text-3xl font-semibold"
                >
                "${word.meaning ? word.meaning : "N/A"} / ${word.pronunciation ? word.pronunciation : "N/A"}"
                </h2>
            </div>
            <div class="mt-14 flex items-center justify-between">
                <div
                onclick="loadWordDetails(${word.id})"
                class="cursor-pointer px-4 py-2 rounded-md bg-zinc-500/10 transition-all hover:bg-zinc-700/20"
                >
                <span
                    ><i class="ri-information-line text-slate-700 text-2xl"></i
                ></span>
                </div>
                <div
                onclick="pronounceWord('${word.word}')"
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
    levelContainer.appendChild(cardDiv);
  });

  manageLoading(false);
};

// load word details
const loadWordDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;

  const res = await fetch(url);
  const details = await res.json();
  displayWordDetails(details.data);
};

// dsiplay word details
const displayWordDetails = (word) => {
  const modalContainer = document.getElementById("modalContainer");
  modalContainer.innerHTML = `
    <div class="">
        <h1 class="text-2xl sm:text-4xl font-semibold" lang="en">
            ${word.word} (<i class="ri-mic-2-line"></i> :
            <span lang="bn">${word.pronunciation}</span>)
        </h1>
        </div>

        <div class="space-y-2">
        <h4 class="text-xl sm:text-2xl font-semibold">Meaning</h4>
        <p lang="bn" class="text-xl sm:text-2xl font-medium">${word.meaning}</p>
        </div>

        <div class="space-y-2">
        <h4 class="text-2xl font-semibold">Example</h4>
        <p class="text-zinc-900/80 text-xl sm:text-2xl font-thin">
            ${word.sentence}
        </p>
        </div>

        <div class="space-x-2">
        <h4 class="text-xl sm:text-2xl font-light" lang="bn">
            সমার্থক শব্দ গুলো
        </h4>
        <div>${createHtmlElements(word.synonyms)}</div>
    </div>
  `;

  document.getElementById("word_modal").showModal();
};

// create html elements
const createHtmlElements = (arr) => {
  const htmlElmnts = arr.map((el) => `<span class="btn">${el}</span>`);
  return htmlElmnts.length === 0
    ? '<span lang="bn" class="text-xs text-zinc-900/80">সিনোনিমস পাওয়া যায়নি</span>'
    : htmlElmnts.join(" ");
};

// loading
const manageLoading = (status) => {
  if (status) {
    document.getElementById("loadingContainer").classList.remove("hidden");
    document.getElementById("loadingContainer").classList.add("flex");

    document.getElementById("levelContainer").classList.add("hidden");
  } else {
    document.getElementById("loadingContainer").classList.remove("flex");
    document.getElementById("loadingContainer").classList.add("hidden");

    document.getElementById("levelContainer").classList.remove("hidden");
  }
};

loadVocabulariesCategory();
