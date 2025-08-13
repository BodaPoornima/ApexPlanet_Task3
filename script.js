const questions = [
  { text: "JavaScript is a programming language?", correct: true },
  { text: "CSS is primarily used for backend development?", correct: false },
  { text: "HTML stands for HyperText Markup Language?", correct: true },
  { text: "React is a CSS framework?", correct: false },
  { text: "In JavaScript, '==' checks both value and type equality?", correct: false },
  { text: "The 'var' keyword declares a variable in JavaScript?", correct: true },
  { text: "Git is a version control system?", correct: true },
  { text: "API stands for Application Programming Interface?", correct: true }
];

function loadQuiz() {
  const quizContainer = document.getElementById('quiz');
  quizContainer.innerHTML = "";
  questions.forEach((q, idx) => {
    quizContainer.innerHTML += `
      <div>
        <p>${idx + 1}. ${q.text}</p>
        <label>
          <input type="radio" name="q${idx}" value="true" required> True
        </label>
        <label>
          <input type="radio" name="q${idx}" value="false" required> False
        </label>
      </div>
    `;
  });
}

function submitQuiz() {
  let score = 0;
  let unanswered = 0;
  questions.forEach((q, idx) => {
    let selected = document.querySelector(`input[name="q${idx}"]:checked`);
    if (!selected) {
      unanswered++;
      return;
    }
    if (String(q.correct) === selected.value) {
      score++;
    }
  });

  if (unanswered > 0) {
    alert(`Please answer all questions before submitting. (${unanswered} unanswered)`);
    return;
  }

  document.getElementById('quizResult').innerText = 
    `You scored ${score} out of ${questions.length}! 🎯`;
}

loadQuiz();
const images = [
  "https://picsum.photos/id/101/400/300",
  "https://picsum.photos/id/102/400/300",
  "https://picsum.photos/id/103/400/300"
];
let idx = 0;

const carousel = document.getElementById('carousel');
show();

function show() {
  carousel.src = images[idx];
}

function prev() {
  idx = (idx - 1 + images.length) % images.length;
  show();
}

function next() {
  idx = (idx + 1) % images.length;
  show();
}
function getJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => { 
      document.getElementById('joke').innerText = data.value; 
    })
    .catch(err => {
      document.getElementById('joke').innerText = "Error fetching joke.";
      console.error(err);
    });
}
