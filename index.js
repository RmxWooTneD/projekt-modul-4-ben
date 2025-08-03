const questions = [
  {
    qestionId1: 1,
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: [
      {
        answer: "Hanover",
        anserId: "a",
        correct: true,
      },
      {
        answer: "Berlin",
        anserId: "b",
        correct: false,
      },
      {
        answer: "Hamburg",
        anserId: "c",
        correct: false,
      },
      {
        answer: "Dresden",
        anserId: "d",
        correct: false,
      },
    ],
  },

  {
    qestionId2: 2,
    question: "Welche farbe hat eine Zitrone?",
    answers: [
      {
        answer: "Blau",
        anserId: "a",
        correct: false,
      },
      {
        answer: "Rot",
        anserId: "b",
        correct: false,
      },
      {
        answer: "Gelb",
        anserId: "c",
        correct: true,
      },
      {
        answer: "Grün",
        anserId: "d",
        correct: false,
      },
    ],
  },

  {
    qestionId3: 3,
    question: "Wie viele Reifen hat ein Fahrad?",
    answers: [
      {
        answer: "Vier",
        anserId: "a",
        correct: false,
      },
      {
        answer: "Eins",
        anserId: "b",
        correct: false,
      },
      {
        answer: "Drei",
        anserId: "c",
        correct: false,
      },
      {
        answer: "Zwei",
        anserId: "d",
        correct: true,
      },
    ],
  },
];

//  Wie ändere ich die form ? es ist ein objekt?
let newQuestion = questions[0];
console.log(newQuestion);
// ____________________________

const quizHtmlEl = document.querySelector(".display-question");
let newQuestionIndex = "";
let questionIndex = 0;
let allQuestions = "";
const quizTitle = document.querySelector(".question-title");
const quizAnswer1 = document.querySelector(".answer1");
const quizAnswer2 = document.querySelector(".answer2");
const quizAnswer3 = document.querySelector(".answer3");
const quizAnswer4 = document.querySelector(".answer4");

function nextQestion() {
  renderQuiz();
  loadNextQuestion();
}

function renderQuiz() {
  // hole Titel und Antworten

  let questionTitle = newQuestion.question;
  console.log(questionTitle);

  let answer1 = newQuestion.answers[0].answer;
  console.log(answer1);
  let answer2 = newQuestion.answers[1].answer;
  let answer3 = newQuestion.answers[2].answer;
  let answer4 = newQuestion.answers[3].answer;

  let html = newQuestion;

  // setze HTML und Werte
  html += `<div class="question">
        <div class="question-title">${questionTitle}</div>
        <div class="question-answers">
          <button class="answer answer1 incorrect" onclick="">${answer1}</button>
          <button class="answer answer2 correct" onclick="">${answer2}</button>
          <button class="answer answer3" onclick="">${answer3}</button>
          <button class="answer answer4" onclick="">${answer4}</button>
        </div>
      </div>`;

  quizHtmlEl.innerHTML = html;
}

function loadNextQuestion() {
  questions.forEach((element) => {
    return (allQuestions = questions);
  });

  console.log(allQuestions);

  if (questionIndex === 0) {
    newQuestionIndex = ++questionIndex;
    console.log(newQuestionIndex);
    newQuestion = questions[1];
    console.log(newQuestion);
  } else {
    newQuestionIndex = ++questionIndex;
    console.log(newQuestionIndex);
    newQuestion = questions[2];
    console.log(newQuestion);
  }
}

// _________________________________________________________

// Lösung anzeigen
// Weiter Button neue frage rendern
