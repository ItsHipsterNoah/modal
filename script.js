'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const showButtons = document.querySelectorAll('.show-modal');

const closeModal = function () {
    modal.style.animation = 'fadeOut 1s';
    modal.style.animationFillMode = 'forwards';
    overlay.style.animation = 'fadeOut 1s';
    overlay.style.animationFillMode = 'forwards';
}

const openModal = function () {
    modal.classList.remove('hidden');
    modal.style.animation = 'fadeInUp 1s';
    overlay.classList.remove('hidden');
    overlay.style.animation = 'fadeIn 1s';

}

for (let i = 0; i < showButtons.length; i++) {
    showButtons[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})