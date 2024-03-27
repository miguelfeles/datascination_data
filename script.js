const searchInput = document.getElementById('search');
const charactersList = document.getElementById('characters');
const characterDetail = document.getElementById('character-detail');

let characters = [];
let currentPage = 1;

function fetchCharacters(page) {
  const url = `https://swapi.dev/api/people/?page=${page}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      characters = characters.concat(data.results);
      displayCharacters(characters);
    });
}

function displayCharacters(characters) {
  charactersList.innerHTML = '';
  characters.forEach(character => {
    const listItem = document.createElement('li');
    listItem.textContent = character.name;
    listItem.addEventListener('click', () => showCharacterDetail(character));
    charactersList.appendChild(listItem);
  });
}

function showCharacterDetail(character) {
  characterDetail.innerHTML = `
    <h2>${character.name}</h2>
    <p>Species: ${character.species}</p>
    <p>Gender: ${character.gender}</p>
    <p>Birth Year: ${character.birth_year}</p>
    <p>Height: ${character.height}</p>
    <p>Hair Color: ${character.hair_color}</p>
    <p>Eye Color: ${character.eye_color}</p>
    <p>Homeworld: ${character.homeworld}</p>
  `;
  characterDetail.style.display = 'block';
}

searchInput.addEventListener('keyup', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(searchTerm));
  displayCharacters(filteredCharacters);
});

fetchCharacters(currentPage);
