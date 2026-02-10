// Check if user has unlocked the app
window.addEventListener("load", function () {
  const isUnlocked = sessionStorage.getItem("loveStoryUnlocked");
  if (!isUnlocked) {
    window.location.href = "index.html";
    return;
  }
});

const questions = [
  {
    id: 1,
    title: "Our First Meeting",
    text: "Do you remember the exact moment when you first realized I was special?",
    options: [
      "It was love at first sight",
      "It was a normal day I guess",
      "I cant even remember",
      "I'm still figuring it out 😉",
    ],
  },
  {
    id: 2,
    title: "Favorite Memory",
    text: "Which moment with me makes you smile the most when you think about it?",
    options: [
      "Our first outing",
      "The time we laughed until we cried",
      "When we supported each other through tough times",
      "All those quiet, intimate moments",
    ],
  },
  {
    id: 3,
    title: "What I Love About You",
    text: "What's one thing about me that you hope never changes?",
    options: [
      "The way I make you laugh",
      "How I listen to you",
      "My weird quirks and habits",
      "The way I look at you",
    ],
  },
  {
    id: 4,
    title: "Growing Together",
    text: "How have I made you a better person?",
    options: [
      "You've taught me to be more patient",
      "You've shown me what true love feels like",
      "You've helped me believe in myself",
      "You've made me more compassionate",
    ],
  },
  {
    id: 5,
    title: "Perfect Day",
    text: "Describe your perfect day with me in one sentence:",
    options: [
      "Waking up in your arms, coffee, and endless conversations",
      "Adventure, laughter, and falling asleep next to you",
      "Simple moments, deep talks, and feeling completely understood",
      "Any day where I get to love you freely",
    ],
  },
  {
    id: 6,
    title: "Future Dreams",
    text: "When you imagine our future, what makes you most excited?",
    options: [
      "Building a life together💖",
      "Growing old and still making each other laugh",
      "Facing challenges as a team",
      "All the little moments in between",
    ],
  },
  {
    id: 7,
    title: "Deep Connection",
    text: "What's something about our relationship that nobody else understands?",
    options: [
      "Our inside jokes and secret language",
      "How we communicate without words",
      "The way we heal each other's wounds",
      "Our unique brand of crazy that works perfectly",
    ],
  },
  {
    id: 8,
    title: "The Question",
    text: "After remembering all this... will you be my Valentine and continue writing our love story together?",
    options: [
      "Yes, forever and always",
      "Yes, you're my everything",
      "Yes, let's make more memories",
      "Yes, my heart is yours",
    ],
  },
];

let currentQuestionIndex = 0;
let answers = [];

function initializeQuestionnaire() {
  updateQuestionDisplay();
  updateProgressBar();
  document.getElementById("totalQuestions").textContent = questions.length;
}

function updateQuestionDisplay() {
  const question = questions[currentQuestionIndex];

  document.getElementById("currentQuestion").textContent = question.id;
  document.getElementById("questionTitle").textContent = question.title;
  document.getElementById("questionText").textContent = question.text;

  const optionsContainer = document.getElementById("answerOptions");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.textContent = option;
    button.onclick = () => selectAnswer(index);

    if (answers[currentQuestionIndex] === index) {
      button.classList.add("selected");
    }

    optionsContainer.appendChild(button);
  });

  updateNavigationButtons();
}

function selectAnswer(optionIndex) {
  answers[currentQuestionIndex] = optionIndex;

  const options = document.querySelectorAll(".answer-option");
  options.forEach((option, index) => {
    option.classList.toggle("selected", index === optionIndex);
  });

  document.getElementById("nextButton").disabled = false;
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    updateQuestionDisplay();
    updateProgressBar();
    animateTransition();
  } else {
    showResults();
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    updateQuestionDisplay();
    updateProgressBar();
    animateTransition();
  }
}

function updateNavigationButtons() {
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  prevButton.style.display =
    currentQuestionIndex === 0 ? "none" : "inline-block";

  if (currentQuestionIndex === questions.length - 1) {
    nextButton.textContent = "See Our Story";
  } else {
    nextButton.textContent = "Next";
  }

  nextButton.disabled = answers[currentQuestionIndex] === undefined;
}

function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById("progressFill").style.width = `${progress}%`;
}

function animateTransition() {
  const card = document.getElementById("questionCard");
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";

  setTimeout(() => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 100);
}

function showResults() {
  const allYes = answers.every((answer, index) =>
    index === questions.length - 1 ? answer >= 0 : true,
  );

  if (allYes) {
    window.location.href = "yes_page.html";
  } else {
    window.location.href = "yes_page.html";
  }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", initializeQuestionnaire);
