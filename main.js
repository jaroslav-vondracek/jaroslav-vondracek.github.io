// Initialize the page with the default language (English)
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = document.getElementById('lang-toggle').dataset.current;
  switchLanguage(currentLang);
});

// Language Toggle Logic
document.getElementById('lang-toggle').addEventListener('click', () => {
  const toggleButton = document.getElementById('lang-toggle');
  const currentLang = toggleButton.dataset.current;

  // Determine the new language
  const newLang = currentLang === 'en' ? 'cz' : 'en';

  // Update the language
  switchLanguage(newLang);

  // Update the button to display the new language option
  toggleButton.textContent = currentLang.toUpperCase();
  toggleButton.dataset.current = newLang;
});

// Function to switch languages
function switchLanguage(lang) {
  document.querySelectorAll('.lang').forEach(el => {
    el.textContent = el.dataset[lang]; // Load the appropriate language text
  });
}
