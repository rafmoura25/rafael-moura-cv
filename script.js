const html = document.documentElement;
const themeBtn = document.getElementById("themeToggle");
const langBtn = document.getElementById("langToggle");

// ---------- INIT DEFAULT LANGUAGE ----------
function applyLanguage(lang) {
  html.lang = lang;

  document.querySelectorAll("[data-pt]").forEach(el => {
    el.textContent = lang === "pt-BR" ? el.dataset.pt : el.dataset.en;
  });

  langBtn.textContent = lang === "pt-BR" ? "EN" : "PT";
}

// Set default language on load
applyLanguage("pt-BR");

// ---------- THEME TOGGLE ----------
themeBtn.addEventListener("click", () => {
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  themeBtn.textContent = isDark ? "🌙" : "☀️";
});

// ---------- LANGUAGE TOGGLE ----------
langBtn.addEventListener("click", () => {
  const newLang = html.lang === "pt-BR" ? "en" : "pt-BR";
  applyLanguage(newLang);
});

lucide.createIcons();
