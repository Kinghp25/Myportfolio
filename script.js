document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkToggle");
  const body = document.body;
  const dark = "dark-mode";

  // Load saved dark mode preference
  if (localStorage.getItem("mode") === dark) {
    enableDark();
  }

  // Dark mode toggle click
  toggle.addEventListener("click", () => {
    if (body.classList.contains(dark)) {
      disableDark();
    } else {
      enableDark();
    }
  });

  // Enable dark mode
  function enableDark() {
    body.classList.add(dark);
    localStorage.setItem("mode", dark);
    toggle.innerText = "☀️";
  }

  // Disable dark mode
  function disableDark() {
    body.classList.remove(dark);
    localStorage.setItem("mode", "light");
    toggle.innerText = "🌙";
  }

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
});
