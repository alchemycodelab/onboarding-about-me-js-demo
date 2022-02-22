// grab DOM elements
const showButton = document.getElementById('btn');
const animal = document.getElementById('animalDiv');

// set event listeners
showButton.addEventListener('click', () => {
    animal.classList.remove('hidden');
});
