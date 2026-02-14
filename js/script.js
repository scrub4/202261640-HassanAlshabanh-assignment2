// Run after page loads
document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     1. Dynamic Footer Year
  ========================== */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* =========================
     2. Time-Based Greeting
  ========================== */
  const greetingEl = document.getElementById("greeting");
  if (greetingEl) {
    const hour = new Date().getHours();

    if (hour < 12) {
      greetingEl.textContent = "Good morning!";
    } else if (hour < 18) {
      greetingEl.textContent = "Good afternoon!";
    } else {
      greetingEl.textContent = "Good evening!";
    }
  }

  /* =========================
     3. Contact Form Validation
  ========================== */
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        e.preventDefault();
        alert("Please fill in all fields.");
      }
    });
  }

  /* =========================
     4. Dark Mode Toggle
  ========================== */
  const themeToggle = document.getElementById("themeToggle");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {

      document.body.classList.toggle("dark");

      const isDark = document.body.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

});

