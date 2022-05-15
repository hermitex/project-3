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
const allAnswerControls = document.querySelectorAll(".answer-controls");

// Start quiz
const initializeQuiz = () => {
  quizContainer.textContent = quizes[0].question;
};
initializeQuiz();

// Handle use navigation
const handleQuizControlEvents = (action, currentQuiz) => {
  if (currentQuiz === 0) {
    quizContainer.textContent = quizes[currentQuiz].question;
    markUserAnswers(currentQuiz);
  }
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

// Toggle radio button check status.
const toggleRadioStatus = () => {
  allAnswerControls.forEach((control) => {
    if (control.checked) {
      control.checked = !control.checked;
    }
  });
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
    toggleRadioStatus();
    // console.log(quizes[currentIndex].userAnswer, quizes[currentIndex].answer)
  } else if (answerFalse.checked) {
    quizes[currentIndex].userAnswer = "false";
    toggleRadioStatus();
    // console.log(quizes[currentIndex].userAnswer, quizes[currentIndex].answer)
  }
  if (currentIndex == 9) {
    calculateUserScore(quizes);
  }
  console.log(quizes);
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
  console.log(percentageScore);

  // Create div container to hold a button
  const divElement = document.createElement("div");
  // Add classes to the div
  divElement.classList.add("buttons");
  divElement.classList.add("action-btn");
  //   create a button for submitting attempt
  const btnSubmit = document.createElement("button");
  btnSubmit.textContent = "Submit";
  //   add class to button
  btnSubmit.classList.add("submit");
  // disable submit button
  // btnSubmit.disabled = "true";
  //   append button to parent div
  divElement.appendChild(btnSubmit);
  //   append div with button to parent div
  quizContainer.parentElement.appendChild(divElement);

  //   listen for btnSubmit click events
  btnSubmit.onclick = () => {
    //   navigate to result page on submit
    location.href = `../pages/result.html?score=${percentageScore}%`;
  };
};

// Toggle radio button check status.
const submit = () => {
  allAnswerControls.forEach((control) => {
    if (control.checked) {
      alert(1)
      btnSubmit.disabled = "false";
    }
  });
};



listenQuizForControlEvents();
