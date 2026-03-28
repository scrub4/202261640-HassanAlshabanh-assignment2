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
        showFormMessage("Please fill in all fields.", "error");
        return;

      }
      form.reset();
      showFormMessage(
        `Thanks, ${name}! Your message has been sent. I'll get back to you soon.`,
        "success"
      );

    });
  }
  // Helper: show a styled confirmation or error message below the form
  function showFormMessage(text, type) {
    // Remove any existing message
    const existing = document.getElementById("formMessage");
    if (existing) existing.remove();
 
    const msg = document.createElement("p");
    msg.id = "formMessage";
    msg.textContent = text;
    msg.style.marginTop = "12px";
    msg.style.padding = "10px 14px";
    msg.style.borderRadius = "4px";
    msg.style.fontWeight = "bold";
 
    if (type === "success") {
      msg.style.backgroundColor = "#d4edda";
      msg.style.color = "#155724";
      msg.style.border = "1px solid #c3e6cb";
    } else {
      msg.style.backgroundColor = "#f8d7da";
      msg.style.color = "#721c24";
      msg.style.border = "1px solid #f5c6cb";
    }
 
    // Insert the message after the form
    form.insertAdjacentElement("afterend", msg);
 
    // Auto-remove after 6 seconds
    setTimeout(() => msg.remove(), 6000);
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

