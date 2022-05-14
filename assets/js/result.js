const resultContainer = document.querySelector('#score')


const scoreString = window.location.search;

const scoreParams = new URLSearchParams(scoreString);

const score = scoreParams.get('score')

resultContainer.textContent = score;
