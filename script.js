// Before publishing, add your real business email and WhatsApp number below.
const CLINTECH_CONTACT = {
  email: "",          // Example format: contact@yourdomain.com
  whatsapp: ""        // International format without +, spaces or dashes, e.g. 2376XXXXXXXX
};

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const body = [
    "ClinTech project enquiry",
    `Name: ${form.get("name")}`,
    `Email or phone: ${form.get("email")}`,
    `Service: ${form.get("service")}`,
    `Message: ${form.get("message") || "Not provided"}`
  ].join("\n");

  if (CLINTECH_CONTACT.email) {
    window.location.href = `mailto:${CLINTECH_CONTACT.email}?subject=${encodeURIComponent("ClinTech project enquiry")}&body=${encodeURIComponent(body)}`;
  } else if (CLINTECH_CONTACT.whatsapp) {
    window.open(`https://wa.me/${CLINTECH_CONTACT.whatsapp}?text=${encodeURIComponent(body)}`, "_blank", "noopener");
  } else {
    document.getElementById("form-hint").textContent =
      "Demo form only: add your real email or WhatsApp number in script.js to receive enquiries.";
    alert("The website is working, but contact details have not been configured yet. Add your email or WhatsApp number in script.js before publishing.");
  }
});
