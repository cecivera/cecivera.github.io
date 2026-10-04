const clientButtons = document.querySelectorAll('[data-client]');
const clientPanels = document.querySelectorAll('.work-page .company-group');
function showClient(id) {
  clientPanels.forEach(panel => { panel.hidden = panel.id !== id; });
  clientButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.client === id));
    button.setAttribute('aria-controls', button.dataset.client);
  });
}
clientButtons.forEach(button => button.addEventListener('click', () => showClient(button.dataset.client)));
showClient('adidas');
document.body.classList.add('clients-ready');
