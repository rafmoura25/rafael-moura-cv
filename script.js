function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      current === "dark" ? "light" : "dark"
    );
  }
  
  function toggleLanguage() {
    const elements = document.querySelectorAll("[data-pt]");
    const currentLang = document.documentElement.lang;
  
    if (currentLang === "pt-BR") {
      document.documentElement.lang = "en";
      elements.forEach(el => el.textContent = el.dataset.en);
      document.getElementById("langToggle").textContent = "PT";
    } else {
      document.documentElement.lang = "pt-BR";
      elements.forEach(el => el.textContent = el.dataset.pt);
      document.getElementById("langToggle").textContent = "EN";
    }
  }
  