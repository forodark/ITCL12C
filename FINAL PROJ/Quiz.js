const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What is the purpose of a CSS framework?",
    a: "To create responsive web designs",
    b: "To manage server-side operations",
    c: "To execute JavaScript functions",
    d: "To connect to databases",
    correct: "a",
  },
  {
    question: "What is the latest version of HTML?",
    a: "HTML4",
    b: "HTML5",
    c: "HTML6",
    d: "HTMLX",
    correct: "b",
  },
  {
    question:
      "Which programming language is often used for server-side development?",
    a: "Java",
    b: "JavaScript",
    c: "Python",
    d: "C#",
    correct: "a",
  },
  {
    question: "What does API stand for?",
    a: "Application Programming Interface",
    b: "Application Program Interface",
    c: "Application Processor Interface",
    d: "Advanced Programming Interface",
    correct: "a",
  },
  {
    question: "What is the purpose of the 'git' command?",
    a: "To compile code",
    b: "To test code",
    c: "To manage version control",
    d: "To debug code",
    correct: "c",
  },
  {
    question: "What is the file extension for a Cascading Style Sheet?",
    a: ".html",
    b: ".css",
    c: ".js",
    d: ".txt",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll("input[name='answer']");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const progressBar = document.getElementById("progress-bar");
const questionCount = quizData.length;

let currentQuiz = 0;
let score = 0;
let usedQuestions = [];

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  if (usedQuestions.length === questionCount) {
    showResults();
    return;
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * questionCount);
  } while (usedQuestions.includes(randomIndex));

  usedQuestions.push(randomIndex);
  const currentQuizData = quizData[randomIndex];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  updateProgressBar();
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[usedQuestions[currentQuiz]].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < questionCount) {
      loadQuiz();
    } else {
      showResults();
    }
  }
});

function showResults() {
  quiz.innerHTML = `
    <h2>You answered ${score}/${questionCount} questions correctly</h2>
    <button onclick="location.reload()">Reload</button>
  `;
  if(score >7){
    playVictoryMusic();
  }
  else{
    playFailMusic();
  }
}

function updateProgressBar() {
  const percent = (currentQuiz / questionCount) * 100;
  progressBar.style.width = percent + "%";
}

function playVictoryMusic(){
  var music = new Audio('victory.mp3');
  music.play();
}
function playFailMusic(){
  var music = new Audio('fail.mp3');
  music.play();
}