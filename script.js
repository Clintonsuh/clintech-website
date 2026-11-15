
/* =====================================
   CLINTECH WEBSITE CONFIGURATION
===================================== */

const WHATSAPP_NUMBER = "237673397264";

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function setWhatsAppLink(id, message) {
  const link = document.getElementById(id);

  if (link) {
    link.href = whatsappLink(message);
  }
}

setWhatsAppLink(
  "mainWhatsApp",
  "Hello ClinTech! I would like to know more about your services."
);

setWhatsAppLink(
  "whatsappFloat",
  "Hello ClinTech! I would like to know more about your services."
);

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =====================================
   MOBILE NAVIGATION
===================================== */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
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
}


/* =====================================
   DARK / LIGHT MODE
===================================== */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  const savedTheme = localStorage.getItem("clintech-theme");

  if (savedTheme) {
    document.body.classList.toggle("dark-mode", savedTheme === "dark");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const currentTheme = document.body.classList.contains("dark-mode")
      ? "dark"
      : "light";

    localStorage.setItem("clintech-theme", currentTheme);
  });
}


/* =====================================
   SCROLL REVEAL ANIMATIONS
===================================== */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach(element => revealObserver.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("visible"));
}


/* =====================================
   ANIMATED STATISTICS
===================================== */

const counters = document.querySelectorAll(".counter");

if ("IntersectionObserver" in window) {
  const counterObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        if (!Number.isFinite(target)) {
          counterObserver.unobserve(counter);
          return;
        }

        const duration = 1500;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          counter.textContent = Math.floor(target * progress);

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        }

        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(counter);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => counterObserver.observe(counter));
}


/* =====================================
   PORTFOLIO SEARCH AND FILTER
===================================== */

const projects = document.querySelectorAll(".project");
const projectSearch = document.getElementById("projectSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const noProjects = document.getElementById("noProjects");

let activeFilter = "all";

function filterProjects() {
  const searchTerm = projectSearch
    ? projectSearch.value.toLowerCase().trim()
    : "";

  let visibleCount = 0;

  projects.forEach(project => {
    const category = (project.dataset.category || "").toLowerCase();
    const text = project.textContent.toLowerCase();

    const matchesFilter =
      activeFilter === "all" || category === activeFilter;

    const matchesSearch = text.includes(searchTerm);

    const isVisible = matchesFilter && matchesSearch;

    project.style.display = isVisible ? "" : "none";

    if (isVisible) visibleCount++;
  });

  if (noProjects) {
    noProjects.style.display = visibleCount === 0 ? "block" : "none";
  }
}

if (projectSearch) {
  projectSearch.addEventListener("input", filterProjects);
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));

    button.classList.add("active");
    activeFilter = (button.dataset.filter || "all").toLowerCase();

    filterProjects();
  });
});


/* =====================================
   PORTFOLIO CAROUSEL
===================================== */

const previousProject = document.getElementById("previousProject");
const nextProject = document.getElementById("nextProject");
const projectTrack = document.querySelector(".project-track");

let carouselPosition = 0;

function moveCarousel(direction) {
  if (!projectTrack) return;

  const visibleProjects = Array.from(projects).filter(
    project => project.style.display !== "none"
  );

  if (visibleProjects.length === 0) return;

  const firstProject = visibleProjects[0];
  const projectWidth = firstProject.getBoundingClientRect().width;

  const gap = parseFloat(
    getComputedStyle(projectTrack).columnGap ||
    getComputedStyle(projectTrack).gap
  ) || 0;

  const maxPosition = Math.max(
    0,
    visibleProjects.length - 1
  );

  carouselPosition = Math.max(
    0,
    Math.min(maxPosition, carouselPosition + direction)
  );

  projectTrack.style.transform =
    `translateX(-${carouselPosition * (projectWidth + gap)}px)`;
}

if (previousProject) {
  previousProject.addEventListener("click", () => moveCarousel(-1));
}

if (nextProject) {
  nextProject.addEventListener("click", () => moveCarousel(1));
}


/* =====================================
   PRICING CALCULATOR
===================================== */

const serviceSelect = document.getElementById("serviceSelect");
const packageSelect = document.getElementById("packageSelect");
const quantityInput = document.getElementById("quantity");
const estimatedPrice = document.getElementById("estimatedPrice");
const priceDescription = document.getElementById("priceDescription");
const priceWhatsApp = document.getElementById("priceWhatsApp");

const prices = {
  website: {
    basic: 75000,
    standard: 150000,
    premium: 300000
  },
  software: {
    basic: 100000,
    standard: 250000,
    premium: 500000
  },
  training: {
    basic: 10000,
    standard: 25000,
    premium: 50000
  }
};

const descriptions = {
  website: "Website development package",
  software: "AI and software solutions package",
  training: "Technology training package"
};

function calculatePrice() {
  if (!serviceSelect || !packageSelect || !estimatedPrice) return;

  const service = serviceSelect.value;
  const selectedPackage = packageSelect.value;

  const quantity = quantityInput
    ? Math.max(1, Number(quantityInput.value) || 1)
    : 1;

  const price = prices[service]?.[selectedPackage] || 0;
  const total = price * quantity;

  estimatedPrice.textContent =
    total.toLocaleString("en-US") + " XAF";

  if (priceDescription) {
    priceDescription.textContent =
      descriptions[service] || "Estimated service price";
  }

  if (priceWhatsApp) {
    const message =
      `Hello ClinTech! I am interested in the ${service} service, ` +
      `${selectedPackage} package. Estimated price: ${total.toLocaleString("en-US")} XAF.`;

    priceWhatsApp.href = whatsappLink(message);
  }
}

if (serviceSelect) {
  serviceSelect.addEventListener("change", calculatePrice);
}

if (packageSelect) {
  packageSelect.addEventListener("change", calculatePrice);
}

if (quantityInput) {
  quantityInput.addEventListener("input", calculatePrice);
}

calculatePrice();


/* =====================================
   CHATBOT DEMONSTRATION
===================================== */

const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendChat = document.getElementById("sendChat");

const chatbotResponses = [
  {
    keywords: ["website", "web development", "web design"],
    response:
      "ClinTech develops modern, responsive websites for businesses, organisations and individuals."
  },
  {
    keywords: ["ai", "artificial intelligence", "software"],
    response:
      "ClinTech explores AI and software solutions designed to improve productivity and solve real-world problems."
  },
  {
    keywords: ["training", "learn", "course", "computer"],
    response:
      "ClinTech provides technology training to help individuals and businesses build practical digital skills."
  },
  {
    keywords: ["price", "cost", "pricing"],
    response:
      "Our pricing depends on the service and project requirements. You can use our pricing calculator or contact us directly."
  },
  {
    keywords: ["contact", "whatsapp", "phone"],
    response:
      "You can contact the ClinTech team through the WhatsApp button on this website."
  }
];

function addChatMessage(message, sender) {
  if (!chatMessages) return;

  const messageElement = document.createElement("div");

  messageElement.className = `chat-message ${sender}`;
  messageElement.textContent = message;

  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getChatbotResponse(message) {
  const normalizedMessage = message.toLowerCase();

  for (const item of chatbotResponses) {
    if (item.keywords.some(keyword => normalizedMessage.includes(keyword))) {
      return item.response;
    }
  }

  return "Thank you for contacting ClinTech! Please tell me a little more about what you need, or contact our team directly through WhatsApp.";
}

function handleChat() {
  if (!chatInput) return;

  const message = chatInput.value.trim();

  if (!message) return;

  addChatMessage(message, "user");
  chatInput.value = "";

  const response = getChatbotResponse(message);

  setTimeout(() => {
    addChatMessage(response, "bot");
  }, 400);
}

if (sendChat) {
  sendChat.addEventListener("click", handleChat);
}

if (chatInput) {
  chatInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleChat();
    }
  });
}


/* =====================================
   MINI CODING PLAYGROUND
===================================== */

const codeInput = document.getElementById("codeInput");
const codePreview = document.getElementById("codePreview");
const runCode = document.getElementById("runCode");

if (runCode && codeInput && codePreview) {
  runCode.addEventListener("click", () => {
    codePreview.srcdoc = codeInput.value;
  });
}
