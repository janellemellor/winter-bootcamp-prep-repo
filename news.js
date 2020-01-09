//1) Add an input and a button to your site. Make sure they have ids.
//2) In your javascript file, get the input, the button, and a div by their id
//3) Add an event listener to the button that changes the text content of the div to the value of the input on click

const pitches = document.getElementById('pitches');

const button = document.getElementById('button');

const article = document.getElementById('article');

button.addEventListener('click', () => {
   pitches.value
    article.textContent = pitches.value
})

