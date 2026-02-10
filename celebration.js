// Check if user has unlocked the app
window.addEventListener("load", function () {
  const isUnlocked = sessionStorage.getItem("loveStoryUnlocked");
  if (!isUnlocked) {
    window.location.href = "index.html";
    return;
  }
});

function celebrateLove() {
  const container = document.querySelector(".container");
  const button = document.querySelector(".forever-yes");

  // Add celebration animation
  container.classList.add("celebration-active");

  // Create heart explosion effect
  createHeartExplosion();

  // Change button text and disable it
  button.textContent = "I Love You Too! 💕";
  button.disabled = true;

  // Add confetti effect
  createConfetti();

  // Show final love message after a delay
  setTimeout(() => {
    showFinalMessage();
  }, 2000);
}

function createHeartExplosion() {
  const colors = ["#fa0561", "#ff6b9d", "#ff8fab", "#ffb3c1"];
  const container = document.querySelector(".container");

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = ["❤️", "💕", "💖", "💗", "💝"][
      Math.floor(Math.random() * 5)
    ];
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    const angle = (Math.PI * 2 * i) / 20;
    const distance = Math.random() * 300 + 200;
    const xOffset = Math.cos(angle) * distance;
    const yOffset = Math.sin(angle) * distance;

    heart.style.animation = `heartExplode-${i} ${Math.random() * 2 + 1}s ease-out forwards`;

    const keyframes = `
      @keyframes heartExplode-${i} {
        0% {
          transform: translate(-50%, -50%) scale(0) rotate(0deg);
          opacity: 1;
        }
        50% {
          transform: translate(calc(-50% + ${xOffset}px), calc(-50% + ${yOffset}px)) scale(1.5) rotate(${Math.random() * 360}deg);
          opacity: 1;
        }
        100% {
          transform: translate(calc(-50% + ${xOffset * 1.5}px), calc(-50% + ${yOffset * 1.5}px)) scale(0.5) rotate(${Math.random() * 720}deg);
          opacity: 0;
        }
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
      styleSheet.remove();
    }, 3000);
  }
}

function createConfetti() {
  const colors = ["#fa0561", "#ff6b9d", "#ffb3c1", "#ffd1e8", "#ffeef8"];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = Math.random() * 10 + 5 + "px";
    confetti.style.height = confetti.style.width;
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = "-10px";
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "9998";
    confetti.style.borderRadius = "50%";
    confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

function showFinalMessage() {
  const loveStory = document.querySelector(".love-story");
  const finalMessage = document.createElement("div");
  finalMessage.className = "final-love-message";
  finalMessage.innerHTML = `
    <h2>💕 Forever Begins Today 💕</h2>
    <p>Thank you for being my Valentine and for making every day special.</p>
    <p>Our love story is my favorite story, and I can't wait to write more chapters with you.</p>
    <p class="signature">All my love, always and forever ❤️</p>
  `;

  loveStory.appendChild(finalMessage);
}

// Add CSS animations dynamically
const style = document.createElement("style");
style.textContent = `
  @keyframes confettiFall {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }
`;

document.head.appendChild(style);
