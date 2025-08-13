const questions = [
  {
    qestionId1: 1,
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: [
      {
        answer: "Hanover",
        answerId: "a",
        correct: false,
      },
      {
        answer: "Berlin",
        answerId: "b",
        correct: true,
      },
      {
        answer: "Hamburg",
        answerId: "c",
        correct: false,
      },
      {
        answer: "Dresden",
        answerId: "d",
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
        answerId: "a",
        correct: false,
      },
      {
        answer: "Rot",
        answerId: "b",
        correct: false,
      },
      {
        answer: "Gelb",
        answerId: "c",
        correct: true,
      },
      {
        answer: "Grün",
        answerId: "d",
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
        answerId: "a",
        correct: false,
      },
      {
        answer: "Eins",
        answerId: "b",
        correct: false,
      },
      {
        answer: "Drei",
        answerId: "c",
        correct: false,
      },
      {
        answer: "Zwei",
        answerId: "d",
        correct: true,
      },
    ],
  },
];

//  Wie ändere ich die form ? es ist ein objekt?

// ____________________________
let questionIndex = 0;
const quizHtmlEl = document.querySelector(".display-question");
const quizTitle = document.querySelector(".question-title");
const quizAnswer1 = document.querySelector(".answer1");
const quizAnswer2 = document.querySelector(".answer2");
const quizAnswer3 = document.querySelector(".answer3");
const quizAnswer4 = document.querySelector(".answer4");
const AnswerEl = document.querySelector(".question-answers");
let element = document.querySelector(".footer");
let hidden = element.getAttribute("hidden");

let newQuestion = questions[questionIndex];
console.log(newQuestion);

function nextQestion() {
  if (hidden) {
    element.removeAttribute("hidden");
  }
  if (questionIndex === 0) {
    renderQuiz();
    console.log(questionIndex);
  } else if (questionIndex < questions.length - 1) {
    renderQuiz();
  } else if (questionIndex === questions.length - 1) {
    renderQuiz();
  } else {
    quizHtmlEl.innerHTML = `<div class="end">Quiz beendet!</div>`;
  }
}

function renderQuiz() {
  // hole Titel und Antworten

  let questionTitle = newQuestion.question;
  console.log(questionTitle);

  let answer1 = newQuestion.answers[0].answer;
  let answer2 = newQuestion.answers[1].answer;
  let answer3 = newQuestion.answers[2].answer;
  let answer4 = newQuestion.answers[3].answer;

  let html = "";

  // setze HTML und Werte
  html += `<div class="question">
        <div class="question-title">${questionTitle}</div>
        <div class="question-answers">
          <button id="a" class="answer answer1" onclick= check()>${answer1}</button>
          <button id="b" class="answer answer2" onclick= check()>${answer2}</button>
          <button id="c" class="answer answer3" onclick= check()>${answer3}</button>
          <button id="d" class="answer answer4" onclick= check()>${answer4}</button>
        </div>
      </div>
          <div>
      <button class="footer" onclick="showAnswer()">Lösung</button>
      <button class="footer" onclick="nextQestion()">Weiter</button>
    </div>`;

  quizHtmlEl.innerHTML = html;
}

function showAnswer() {
  quizHtmlEl.querySelectorAll(".answer").forEach((el) => {
    const question = questions[questionIndex];
    const answer = question.answers.find((a) => a.answerId === el.id);
    if (answer.correct) {
      el.classList.add("correct");
    } else {
      el.classList.add("incorrect");
    }
  });
  questionIndex++;
  console.log(questionIndex);
  newQuestion = questions[questionIndex];
  console.log(newQuestion);
}

function check() {
  quizHtmlEl.querySelectorAll(".answer").forEach((el) => {
    const question = questions[questionIndex];
    const answer = question.answers.find((a) => a.answerId === el.id);
    if (answer.correct) {
      el.classList.add("correct");
    } else {
      el.classList.add("incorrect");
    }
  });
  questionIndex++;
  console.log(questionIndex);
  newQuestion = questions[questionIndex];
  console.log(newQuestion);
}
