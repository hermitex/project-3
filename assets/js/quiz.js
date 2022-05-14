import { quizes } from "./data.js";

// Get quiz controls
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const controls = document.querySelectorAll(".quiz-controls");

// Get quiz container
let quizContainer = document.querySelector("#quiz");

// Start quiz
const initializeQuiz = () => {
  quizContainer.textContent = quizes[0].question;
};
initializeQuiz();

const handleQuizControlEvents = (action, currentQuiz) => {
  if (action === "next") {
    currentQuiz += 1;
    if (currentQuiz < 10) {
      quizContainer.textContent = quizes[currentQuiz].question;
    }
  } else if (action === "prev" && currentQuiz > 0) {
    currentQuiz -= 1;
    if (currentQuiz > -1) {
      quizContainer.textContent = quizes[currentQuiz].question;
    }
  }
};

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

listenQuizForControlEvents();
