// richtig:[2]
const questions = [
  {
    id: 1,
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: [
      {
        id: "a",
        text: "München",
        correct: false,
      },

      {
        id: "b",
        text: "Berlin",
        correct: true,
      },

      {
        id: "c",
        text: "Hanover",
        correct: false,
      },

      {
        id: "d",
        text: "Rostock",
        correct: false,
      },
    ],
  },

  // richtig:[4]
  {
    id: 2,
    question: "Welche Farbe hat eine Banane?",
    answers: [
      {
        id: "a",
        text: "Rot",
        correct: false,
      },

      {
        id: "b",
        text: "Blau",
        correct: false,
      },

      {
        id: "c",
        text: "Grün",
        correct: false,
      },

      {
        id: "d",
        text: "Gelb",
        correct: true,
      },
    ],
  },

  // richtig:[3]
  {
    id: 3,
    question: "Wie viel Gramm ist 1 Kilo?",
    answers: [
      {
        id: "a",
        text: "10.000g",
        correct: false,
      },

      {
        id: "b",
        text: "5.000g",
        correct: false,
      },

      {
        id: "c",
        text: "1.000g",
        correct: true,
      },

      {
        id: "d",
        text: "500g",
        correct: false,
      },
    ],
  },

  // richtig:[3]
  {
    id: 4,
    question: "Was ist keine Automarke?",
    answers: [
      {
        id: "a",
        text: "Volkswagen",
        correct: false,
      },

      {
        id: "b",
        text: "Lada",
        correct: false,
      },

      {
        id: "c",
        text: "Copra",
        correct: true,
      },

      {
        id: "d",
        text: "Bugatti",
        correct: false,
      },
    ],
  },
];

let currentQuestion;
let currentQuestionPointer = -1;

// Frage erstellen
function renderQuestion(question) {
  const questionDiv = document.createElement("div");
  questionDiv.id = question.id;
  questionDiv.classList.add("question");
  console.log(questionDiv);

  const questionTitle = document.createElement("div");
  questionTitle.classList.add("question-title");

  questionTitle.appendChild(document.createTextNode(question.question));

  const questionAnswers = document.createElement("div");
  questionAnswers.classList.add("question-answers");

  // zufällige reihenfolge
  const answersCopy = [];
  question.answers.forEach((answer) => {
    answersCopy.push(answer);
  });

  while (answersCopy.length > 0) {
    const randomPointer = Math.floor(Math.random() * answersCopy.length);

    const answer = answersCopy.splice(randomPointer, 1)[0];

    const answerDiv = document.createElement("button");
    answerDiv.id = answer.id;
    answerDiv.setAttribute("onclick", `validate('${answer.id}')`);
    answerDiv.classList.add("answer");
    answerDiv.appendChild(document.createTextNode(answer.text));
    questionAnswers.appendChild(answerDiv);
  }

  questionDiv.appendChild(questionTitle);
  questionDiv.appendChild(questionAnswers);

  document.getElementById("display-question").appendChild(questionDiv);
}
// bis hier

function nextQestion() {
  if (currentQuestion) {
    document.getElementById(String(currentQuestion.id)).remove();
  }

  if (currentQuestionPointer + 1 < questions.length) {
    currentQuestionPointer++;
    currentQuestion = questions[currentQuestionPointer];
  } else {
    currentQuestionPointer = 0;
    currentQuestion = questions[currentQuestionPointer];
  }
  renderQuestion(currentQuestion);
}
function validate(answerId) {
  const correctAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });

  if (correctAnswer.id === answerId) {
    alert("Richtig");
    document.getElementById(answerId).classList.add("correct");
  } else {
    alert("Falsch");
    document.getElementById(answerId).classList.add("incorrect");
    document.getElementById(correctAnswer.id).classList.add("correct");
  }
}

function showSolution() {
  const correctAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });
  document.getElementById(correctAnswer.id).classList.add("correct");
}
