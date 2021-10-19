// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const append = (joke) => {
  const jokeContainer = document.querySelector('#jokeContainer');
  jokeContainer.innerText = joke;
};

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => append(data.joke))
    .catch(error => console.log(error))
};

window.onload = () => fetchJoke();