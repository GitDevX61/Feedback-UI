const ratingElements = document.querySelectorAll('.rating');

const btnEl = document.querySelector('.js-btn')
const containerEl = document.querySelector('.js-container');

let selectedRating = "";

ratingElements.forEach((ratingElement) => {
  ratingElement.addEventListener('click', (event) => {
    removeActive();
    selectedRating = event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add('active');
    event.target.parentNode.classList.add('active');
  });
});

function removeActive() {
  ratingElements.forEach((ratingElement) => {
    ratingElement.classList.remove('active');
  });
}

btnEl.addEventListener('click', () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `Thank You! <br> <br> Feedback: ${selectedRating} <br> <br> We'll use your feedback to improve our customer support.`
  }
});


  


