'use strict';

const showModalBtn = document.querySelector('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  closeModalBtn.focus();
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  showModalBtn.focus();
};

showModalBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
