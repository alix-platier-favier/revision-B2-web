// const str = "sport alimentation repos"

// Vous venez de recevoir une phrase, mais vous vous attendiez à recevoir 3
// mots distincts pour afficher les sections de votre site à l’aide d’une boucle.

// Séparez cette phrase en trois mots distincts afin de pouvoir les afficher dans
// votre rendu HTML dans trois éléments différents.

const str = "sport alimentation repos";
const words = str.split(" ");

function displayWords(words) {
    const wordsDiv = document.getElementById('words');
    wordsDiv.innerHTML = '';

    words.forEach(word => {
        const wordDiv = document.createElement('div');
        wordDiv.classList.add('word');
        wordDiv.innerHTML = `<h2>${word}</h2>`;

        wordsDiv.appendChild(wordDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayWords(words);
});