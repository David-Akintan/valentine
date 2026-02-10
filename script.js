window.addEventListener("load", function () {
  const isUnlocked = sessionStorage.getItem("loveStoryUnlocked");
  if (!isUnlocked) {
    window.location.href = "index.html";
  }
});

const gentleMessages = [
  "Take your time, my love...",
  "No pressure at all...",
  "I'll wait for you forever...",
  "Whenever you're ready...",
  "Our story is worth the wait...",
  "I understand, take your time...",
  "Your happiness matters most...",
  "I'll be here when you're ready...",
  "No rush, our love is timeless...",
  "Just know I'm thinking of you... ❤️",
];

let messageIndex = 0;

function startJourney() {
  // Show loader
  showLoader();

  // Add suspense delay before redirecting
  setTimeout(() => {
    window.location.href = "questionnaire.html";
  }, 2000);
}

function showLoader() {
  const loader = document.createElement("div");
  loader.className = "journey-loader";
  loader.innerHTML = `
    <div class="loader-content">
      <div class="loader-hearts">
        <div class="loader-heart">💕</div>
        <div class="loader-heart">💖</div>
        <div class="loader-heart">💗</div>
      </div>
      <p class="loader-text">Preparing our love story...</p>
      <div class="loader-bar">
        <div class="loader-progress"></div>
      </div>
    </div>
  `;

  document.body.appendChild(loader);

  // Animate loader
  setTimeout(() => {
    loader.style.opacity = "1";
  }, 10);
}

function handleMaybeClick() {
  const maybeButton = document.querySelector(".maybe-button");
  const startButton = document.querySelector(".start-button");

  maybeButton.textContent = gentleMessages[messageIndex];
  messageIndex = (messageIndex + 1) % gentleMessages.length;

  const currentSize = parseFloat(window.getComputedStyle(startButton).fontSize);
  startButton.style.fontSize = `${currentSize * 1.1}px`;
  startButton.style.transform = "scale(1.05)";

  setTimeout(() => {
    startButton.style.transform = "scale(1)";
  }, 200);
}

// Scroll indicator functionality
function createScrollIndicator() {
  const scrollIndicator = document.createElement("div");
  scrollIndicator.className = "scroll-indicator";
  scrollIndicator.innerHTML = `
    <div class="scroll-arrow">
      <span>↓</span>
    </div>
  `;

  document.body.appendChild(scrollIndicator);

  // Hide indicator when scrolled
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      scrollIndicator.style.opacity = "0";
      scrollIndicator.style.pointerEvents = "none";
    } else {
      scrollIndicator.style.opacity = "1";
      scrollIndicator.style.pointerEvents = "auto";
    }
  });

  // Smooth scroll on click
  scrollIndicator.addEventListener("click", function () {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });
}

// Create scroll indicator when page loads
window.addEventListener("load", createScrollIndicator);
