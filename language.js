function setLanguage(lang) {
  document.body.dataset.lang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-set]').forEach(button => {
    const active = button.dataset.set === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}
let initialLanguage = 'en';
try { initialLanguage = sessionStorage.getItem('portfolio-language') || 'en'; } catch (_) {}
setLanguage(initialLanguage === 'es' ? 'es' : 'en');
document.querySelectorAll('[data-set]').forEach(button => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.set);
    try { sessionStorage.setItem('portfolio-language', button.dataset.set); } catch (_) {}
  });
});
