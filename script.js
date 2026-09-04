const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const topBtn = document.querySelector("#topBtn");
const revealItems = document.querySelectorAll(".reveal");

menuBtn?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("open");
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => mobileMenu?.classList.remove("open"));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = Number(entry.target.dataset.delay || 0);
        setTimeout(() => entry.target.classList.add("visible"), delay);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealItems.forEach((el, index) => {
  el.dataset.delay = Math.min((index % 4) * 70, 210);
  observer.observe(el);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) topBtn?.classList.add("show");
  else topBtn?.classList.remove("show");
});

topBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const form = document.querySelector("#contactForm");
const note = document.querySelector("#formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  note.textContent =
    "Form siap dihubungkan ke email/WhatsApp. Untuk sekarang ini hanya demo frontend.";
});
