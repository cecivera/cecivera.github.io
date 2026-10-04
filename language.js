function setLanguage(lang) {
  document.body.dataset.lang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-set]').forEach(button => {
    const active = button.dataset.set === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}
let initialLanguage = 'es';
try { initialLanguage = sessionStorage.getItem('portfolio-language') || 'es'; } catch (_) {}
setLanguage(initialLanguage === 'en' ? 'en' : 'es');
document.querySelectorAll('[data-set]').forEach(button => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.set);
    try { sessionStorage.setItem('portfolio-language', button.dataset.set); } catch (_) {}
  });
});
