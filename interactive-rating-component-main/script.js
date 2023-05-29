'use strict';

// DOM ELEMENTS
const ratingRequestEl = document.querySelector('.rating-request');
const ratingThanksEl = document.querySelector('.rating-thanks');
const btn = document.querySelector('.btn');
const ratingEl = document.querySelectorAll('.rating');
const resultNumberEl = document.querySelector('.result-number');
let resultText = document.querySelector('.result-number').textContent;
resultText = 0;

function removeSelection() {
  ratingEl.forEach((box) => box.classList.remove('rating-selected'));
}

ratingEl.forEach((box) => {
  box.addEventListener('click', function () {
    removeSelection();
    box.classList.add('rating-selected');
    resultText = Number(box.textContent);
    resultNumberEl.innerHTML = `${resultText}`;
  });
});

btn.addEventListener('click', () => {
  if (resultText === 0) {
    alert('Please select a score');
  } else {
    ratingRequestEl.classList.toggle('hidden');
    ratingThanksEl.classList.toggle('hidden');
  }
});
