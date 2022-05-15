const resultContainer = document.querySelector("#score");

const remarks = document.querySelector("#remarks");

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
const showFireWorks = () => {
  let videoToPlay = Math.floor(Math.random() * videos.length);
  videoContainer.src = videos[videoToPlay].url;
};

const checkUserScore = () => {
  let extractScore = /\d+/g;
  let userScore = score.match(extractScore)[0];
  return userScore;
};

const giveRemark = () => {
  let score = checkUserScore();

  if (score < 50) {
    remarks.textContent = `This must have challenged your facualties or it is just a bad day. Please try again!`;
  } else if (score >= 50 && score <= 80) {
    remarks.textContent = `You did good but you could improve!`;
    showFireWorks();
  } else {
    remarks.textContent = `You must be a genius! ${score} is a great score. Fireworks to you!`;
    showFireWorks();
  }
};

giveRemark();

document.querySelector(".back-to-quiz").addEventListener("click", () => {
  location.href = `../pages/quiz.html`;
});

document.querySelector(".home").addEventListener("click", () => {
  location.href = `/project-3`;
});
