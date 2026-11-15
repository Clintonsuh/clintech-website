
/* =====================================
   CLINTECH WEBSITE CONFIGURATION
===================================== */

// Replace this with your real WhatsApp number.
// International format without +, spaces or dashes.
const WHATSAPP_NUMBER = "237 673397264";

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const mainWhatsApp = document.getElementById("mainWhatsApp");
const whatsappFloat = document.getElementById("whatsappFloat");

[mainWhatsApp, whatsappFloat].forEach(link => {
  link.href = whatsappLink("Hello ClinTech! I would like to know more about your services.");
});

document.getElementById("year").textContent = new Date().getFullYear();


/* =====================================
   MOBILE NAVIGATION
===================================== */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuToggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});


/* =====================================
   DARK / LIGHT MODE
===================================== */

const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  themeToggle.textContent = theme === "dark" ? "☀" : "☾";
  localStorage.setItem("clintech-theme", theme);
}

const savedTheme = localStorage.getItem("clintech-theme") || "light";
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark")
    ? "light"
    : "dark";

  setTheme(nextTheme);
});


/* =====================================
   SCROLL ANIMATIONS
===================================== */

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => {
  revealObserver.observe(element);
});


/* =====================================
   ANIMATED STATISTICS
===================================== */

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const counter = entry.target;
    const target = Number(counter.dataset.target);
    const duration = 1400;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      counter.textContent = Math.floor(target * eased) + (target === 100 ? "%" : "+");

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
    counterObserver.unobserve(counter);
  });
}, { threshold: 0.6 });

document.querySelectorAll(".counter").forEach(counter => {
  counterObserver.observe(counter);
});


/* =====================================
   PORTFOLIO SEARCH AND FILTER
===================================== */

const projects = [...document.querySelectorAll(".project")];
const filters = document.querySelectorAll(".filter");
const projectSearch = document.getElementById("projectSearch");
const noProjects = document.getElementById("noProjects");

let activeFilter = "all";

function filterProjects() {
  const search = projectSearch.value.toLowerCase();
  let visible = 0;

  projects.forEach(project => {
    const matchesCategory =
      activeFilter === "all" ||
      project.dataset.category === activeFilter;

    const matchesSearch =
      project.dataset.name.toLowerCase().includes(search) ||
      project.textContent.toLowerCase().includes(search);

    const show = matchesCategory && matchesSearch;

    project.style.display = show ? "" : "none";
    if (show) visible++;
  });

  noProjects.hidden = visible !== 0;
  updateCarousel();
}

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    activeFilter = button.dataset.filter;
    filterProjects();
  });
});

projectSearch.addEventListener("input", filterProjects);


/* =====================================
   PORTFOLIO CAROUSEL
===================================== */

let carouselIndex = 0;

function visibleProjects() {
  return projects.filter(project => project.style.display !== "none");
}

function updateCarousel() {
  const visible = visibleProjects();

  if (!visible.length) {
    document.getElementById("carouselPosition").textContent = "00 / 00";
    return;
  }

  carouselIndex = Math.min(carouselIndex, visible.length - 1);

  document.getElementById("carouselPosition").textContent =
    `${String(carouselIndex + 1).padStart(2, "0")} / ${String(visible.length).padStart(2, "0")}`;
}

function moveCarousel(direction) {
  const visible = visibleProjects();
  if (!visible.length) return;

  carouselIndex = (carouselIndex + direction + visible.length) % visible.length;
  updateCarousel();

  visible[carouselIndex].scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

document.getElementById("previousProject").addEventListener("click", () => {
  moveCarousel(-1);
});

document.getElementById("nextProject").addEventListener("click", () => {
  moveCarousel(1);
});


/* =====================================
   PRICING CALCULATOR
===================================== */

const serviceSelect = document.getElementById("serviceSelect");
const packageSelect = document.getElementById("packageSelect");
const quantity = document.getElementById("quantity");
const estimatedPrice = document.getElementById("estimatedPrice");
const priceDescription = document.getElementById("priceDescription");
const priceWhatsApp = document.getElementById("priceWhatsApp");

const prices = {
  website: {
    starter: 50000,
    professional: 100000,
    premium: 200000
  },
  software: {
    starter: 75000,
    professional: 150000,
    premium: 300000
  },
  training: {
    starter: 5000,
    professional: 15000,
    premium: 30000
  }
};

const descriptions = {
  website: "Website development",
  software: "Software and digital solutions",
  training: "Technology training"
};

function calculatePrice() {
  const service = serviceSelect.value;
  const pack = packageSelect.value;

  const units = Math.max(
    1,
    Math.min(20, Number(quantity.value) || 1)
  );

  quantity.value = units;

  const total = prices[service][pack] * units;

  estimatedPrice.textContent =
    total.toLocaleString("en-US") + " XAF";

  priceDescription.textContent =
    `${descriptions[service]} · ${pack} package · ${units} unit(s)`;

  const message =
    `Hello ClinTech! I am interested in ${descriptions[service]}. ` +
    `Package: ${pack}. Units: ${units}. ` +
    `Estimated amount: ${total.toLocaleString("en-US")} XAF. ` +
    `Please provide a detailed quotation.`;

  priceWhatsApp.href = whatsappLink(message);
}

[serviceSelect, packageSelect, quantity].forEach(element => {
  element.addEventListener("input", calculatePrice);
});

calculatePrice();


/* =====================================
   CHATBOT DEMONSTRATION
===================================== */

const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendChat = document.getElementById("sendChat");

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = `message ${type}`;
  message.textContent = text;

  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(question) {
  const q = question.toLowerCase();

  if (q.includes("website") || q.includes("web")) {
    return "ClinTech develops responsive websites for businesses and organisations. Contact us to discuss your project.";
  }

  if (q.includes("price") || q.includes("cost")) {
    return "Our website includes an illustrative pricing calculator. Final quotations depend on your requirements.";
  }

  if (q.includes("ai") || q.includes("tutor")) {
    return "ClinTech AI Tutor is an offline learning assistant designed to help students learn using locally running AI models.";
  }

  if (q.includes("training") || q.includes("teach")) {
    return "We offer practical technology and computer training. Tell us which skills you would like to develop.";
  }

  if (q.includes("contact") || q.includes("whatsapp")) {
    return "You can contact the ClinTech team through the WhatsApp button on this website.";
  }

  if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
    return "Hello! Welcome to ClinTech. Are you interested in websites, AI solutions or technology training?";
  }

  return "Thank you for your interest in ClinTech! This is a demonstration assistant. For a detailed answer, please contact our team through WhatsApp.";
}

function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  chatInput.value = "";

  sendChat.disabled = true;

  setTimeout(() => {
    addMessage(getBotResponse(text), "bot");
    sendChat.disabled = false;
  }, 500);
}

sendChat.addEventListener("click", sendMessage);

chatInput.addEventListener("keydown", event => {
  if (event.key === "Enter") sendMessage();
});


/* =====================================
   MINI CODING PLAYGROUND
===================================== */

const codeInput = document.getElementById("codeInput");
const codePreview = document.getElementById("codePreview");
const runCode = document.getElementById("runCode");

function executeCode() {
  const source = codeInput.value;

  // Preview is isolated in a sandboxed iframe.
  const safeDocument = `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 25px;
        color: #292927;
      }
      button {
        padding: 10px 18px;
        background: #c5a66a;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>${source}</body>
  </html>`;

  codePreview.srcdoc = safeDocument;
}

runCode.addEventListener("click", executeCode);
executeCode();
