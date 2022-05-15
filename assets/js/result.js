const resultContainer = document.querySelector("#score");

const scoreString = window.location.search;

const scoreParams = new URLSearchParams(scoreString);

const score = scoreParams.get("score");

resultContainer.textContent = score;

// Get video container
const videoContainer = document.querySelector(".results-firworks");

// Video data
const videos = [
  {
    url: "../assets/videos/fireworks-1.mp4",
  },
  {
    url: "../assets/videos/fireworks-2.mp4",
  },
  {
    url: "../assets/videos/fireworks-3.mp4",
  },
];

let videoToPlay = Math.floor(Math.random() * videos.length);
videoContainer.src = videos[videoToPlay].url;


document.querySelector('.back-to-quiz').addEventListener('click',()=>{
    location.href = `../pages/quiz.html`;
})

document.querySelector('.home').addEventListener('click',()=>{
    location.href = `/`;
})