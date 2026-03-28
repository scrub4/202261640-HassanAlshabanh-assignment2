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
  const form = document.querySelector("#contactForm form");  ;

  if (form) {
    form.addEventListener("submit", function (e) {
       e.preventDefault(); 
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        showFormMessage("Please fill in all fields.", "error");
        return;

      }

      // All fields valid — show confirmation message

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

    /* =========================
     5. Fetch Quote from Public API
  ========================== */
const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");
  const newQuoteBtn = document.getElementById("newQuoteBtn");
 
  // Fallback quotes in case the API is unavailable
  const fallbackQuotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
    { quote: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  ];
 
  function showFallbackQuote() {
    const random = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    if (quoteText) quoteText.textContent = `"${random.quote}"`;
    if (quoteAuthor) quoteAuthor.textContent = `— ${random.author}`;
  }
 
  function fetchQuote() {
    if (!quoteText) return;
 
    quoteText.textContent = "Loading...";
    if (quoteAuthor) quoteAuthor.textContent = "";
 
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then(function (response) {
        if (!response.ok) throw new Error("Network error");
        return response.json();
      })
      .then(function (data) {
        // adviceslip returns { slip: { id, advice } }
        quoteText.textContent = `"${data.slip.advice}"`;
        if (quoteAuthor) quoteAuthor.textContent = "— Advice Slip";
      })
      .catch(function () {
        // API failed — show a hardcoded fallback instead
        showFallbackQuote();
      });
  }
 
  fetchQuote();
 
  if (newQuoteBtn) {
    newQuoteBtn.addEventListener("click", fetchQuote);
  }
 
 
  /* =========================
     6. Project Search Filter
  ========================== */
  const searchInput = document.getElementById("projectSearch");
  const articles = document.querySelectorAll("#projects article");
 
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = searchInput.value.trim().toLowerCase();
 
      articles.forEach(function (article) {
        const text = article.textContent.toLowerCase();
        if (text.includes(query)) {
          article.style.display = "block";
        } else {
          article.style.display = "none";
        }
      });
 
      // Show a "no results" message if all articles are hidden
      const noResults = document.getElementById("noResults");
      const allHidden = Array.from(articles).every(
        (a) => a.style.display === "none"
      );
      if (noResults) {
        noResults.style.display = allHidden ? "block" : "none";
      }
    });
  }
 
  /* 
     7. Skills Progress Bar Animation
        (triggers when section scrolls into view)
  */
  const skillBars = document.querySelectorAll(".skill-bar-fill");
 
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const level = bar.getAttribute("data-level");
          bar.style.width = level + "%";
          observer.unobserve(bar); // animate only once
        }
      });
    },
    { threshold: 0.3 }
  );
 
  skillBars.forEach(function (bar) {
    observer.observe(bar);
  });




});

