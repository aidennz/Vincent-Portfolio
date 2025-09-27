document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll("[data-reveal]");

  revealElements.forEach((el) => {
    const delay = el.getAttribute("data-reveal-delay");
    setTimeout(() => {
      el.classList.add("revealed");
    }, delay ? parseFloat(delay) * 1000 : 0);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll("[data-reveal]");
  revealElements.forEach((el) => {
    const delay = el.getAttribute("data-reveal-delay");
    setTimeout(() => {
      el.classList.add("revealed");
    }, delay ? parseFloat(delay) * 1000 : 0);
  });

  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");
  const body = document.body;

  navTogglers.forEach((btn) => {
    btn.addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
      body.classList.toggle("nav-active");
    });
  });

  if (overlay) {
    overlay.addEventListener("click", function () {
      navbar.classList.remove("active");
      overlay.classList.remove("active");
      body.classList.remove("nav-active");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const typewriterSpan = document.querySelector(".typewriter span");
  const words = ["CS Student", "Learner", "ML/AI Enthusiast"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  let pauseTime = 1500;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typewriterSpan.textContent = currentWord.substring(0, charIndex--);
    } else {
      typewriterSpan.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length + 1) {
      isDeleting = true;
      setTimeout(type, pauseTime);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : typingSpeed);
    }
  }

  if (typewriterSpan) type();
});