const questions = [
  {
    qestionId1: 1,
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: [
      {
        answer: "Hanover",
        anserId: "a",
        correct: false,
      },
      {
        answer: "Berlin",
        anserId: "b",
        correct: true,
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
let newQuestionIndex = "";
let questionIndex = 0;
const quizHtmlEl = document.querySelector(".display-question");
const quizTitle = document.querySelector(".question-title");
const quizAnswer1 = document.querySelector(".answer1");
const quizAnswer2 = document.querySelector(".answer2");
const quizAnswer3 = document.querySelector(".answer3");
const quizAnswer4 = document.querySelector(".answer4");
const AnswerEl = document.querySelector(".question-answers");

function nextQestion() {
  renderQuiz();
  if (questionIndex === 0) {
    alert("Viel Spaß beim Quiz!");
  } else if (questionIndex === 1) {
    alert("Hier ist die zweite Frage!");
  } else if (questionIndex === 2) {
    alert("Hier ist die letzte Frage!");
  }
  // Überprüfe, ob die letzte Frage erreicht wurde
  else if (questionIndex === 3) {
    alert(
      "Das war die letzte Frage! Du hast das Quiz erfolgreich abgeschlossen!"
    );
    alert("Klicke auf 'Weiter' um das Quiz zu beenden.");
    quizHtmlEl.innerHTML = `<div class="end-message">Quiz beendet! Vielen Dank fürs Mitmachen!</div>`;
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
    if (questionIndex === 0) {
      if (el.id === "b") {
        el.classList.add("correct");
      } else {
        el.classList.add("incorrect");
      }
    } else if (questionIndex === 1) {
      if (el.id === "c") {
        el.classList.add("correct");
      } else {
        el.classList.add("incorrect");
      }
    } else if (questionIndex === 2) {
      if (el.id === "d") {
        el.classList.add("correct");
      } else {
        el.classList.add("incorrect");
      }
    }
  });
  loadNextQuestion();
}

function loadNextQuestion() {
  if (questionIndex === 0) {
    questionIndex = ++questionIndex;
    console.log(questionIndex);
    newQuestion = questions[1];
  } else if (questionIndex === 1) {
    questionIndex = ++questionIndex;
    console.log(questionIndex);
    newQuestion = questions[2];
  } else if (questionIndex === 2) {
    questionIndex = ++questionIndex;
    console.log(questionIndex);
  }
}

function check() {
  if (questionIndex === 0) {
    document.getElementById("b").classList.add("correct");
    document.getElementById("a").classList.add("incorrect");
    document.getElementById("c").classList.add("incorrect");
    document.getElementById("d").classList.add("incorrect");
  } else if (questionIndex === 1) {
    document.getElementById("a").classList.add("incorrect");
    document.getElementById("b").classList.add("incorrect");
    document.getElementById("c").classList.add("correct");
    document.getElementById("d").classList.add("incorrect");
  } else if (questionIndex === 2) {
    document.getElementById("a").classList.add("incorrect");
    document.getElementById("b").classList.add("incorrect");
    document.getElementById("c").classList.add("incorrect");
    document.getElementById("d").classList.add("correct");
  }
  loadNextQuestion();
}

// _________________________________________________________
