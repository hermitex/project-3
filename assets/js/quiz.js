// Get the data
import { quizes } from "./data.js";

// Get quiz controls
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const controls = document.querySelectorAll(".quiz-controls");

// Get quiz container
let quizContainer = document.querySelector("#quiz");

// Get answer controls
const answerTrue = document.querySelector(".true");
const answerFalse = document.querySelector(".false");

// Start quiz
const initializeQuiz = () => {
  quizContainer.textContent = quizes[0].question;
};
initializeQuiz();

// Handle use navigation
const handleQuizControlEvents = (action, currentQuiz) => {
  if (action === "next") {
    currentQuiz += 1;
    if (currentQuiz < 10) {
      quizContainer.textContent = quizes[currentQuiz].question;
      markUserAnswers(currentQuiz);
    } else if (currentQuiz === 10) {
    }
  } else if (action === "prev" && currentQuiz > 0) {
    currentQuiz -= 1;
    if (currentQuiz > -1) {
      quizContainer.textContent = quizes[currentQuiz].question;
    }
  }
};

// Find the current quiz
const findCurrentQuiz = () => {
  let currentQuiz = quizContainer.textContent;
  let currentIndex;
  quizes.forEach((quiz) => {
    currentQuiz = quizContainer.textContent;
    if (quiz.question === currentQuiz) {
      currentIndex = quizes.indexOf(quiz);
    }
  });
  return currentIndex;
};

// Monitor mouse clicks
const listenQuizForControlEvents = () => {
  let currentIndex = findCurrentQuiz();
  controls.forEach((control) => {
    control.addEventListener("click", (e) => {
      if (e.target.classList.contains("next")) {
        currentIndex = findCurrentQuiz();
        handleQuizControlEvents("next", currentIndex);
      } else {
        currentIndex = findCurrentQuiz();
        handleQuizControlEvents("prev", currentIndex);
      }
    });
  });
};

const markUserAnswers = (currentIndex) => {
  if (answerTrue.checked) {
    quizes[currentIndex].userAnswer = "true";
    // if (quizes[currentIndex].answer==="true") {
    //   quizes[currentIndex].correct = "true";
    // }
    // quizes[currentIndex].correct = "false";
  } else if (answerFalse.checked) {
    quizes[currentIndex].userAnswer = "false";
    // if (quizes[currentIndex].answer==="false") {
    //   quizes[currentIndex].correct = "true";
    // }
    // quizes[currentIndex].correct = "false";
  }
  if (currentIndex == 9) {
    calculateUserScore(quizes);
  }
};

const calculateUserScore = (userScore) => {
  console.log(userScore);
  let marks = 0;
  let percentageScore;
  userScore.forEach((score) => {
    if (score.userAnswer === score.answer) {
      marks++;
    }
  });

  percentageScore = (marks / 10) * 100;
  location.href = `../pages/result.html?score=${percentageScore}%`;
};

listenQuizForControlEvents();
