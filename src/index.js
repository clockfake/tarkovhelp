import './styles/index.scss';

addEventListener('DOMContentLoaded', () => {
  [
    document.getElementById('registration-sign-up'),
    document.getElementById('rules-sign-up'),
  ].map(button => {
    button?.addEventListener('click', () => {
      const cover = document.getElementById('modal-cover');
      cover?.classList.remove('modal__cover_closed');
    });
  });

  [
    document.getElementById('close-modal'),
    document.getElementById('modal-cover'),
  ].map(element => {
    element?.addEventListener('click', e => {
      if (e.target !== e.currentTarget) return;
      const cover = document.getElementById('modal-cover');
      cover?.classList.add('modal__cover_closed');
    });
  });
});
