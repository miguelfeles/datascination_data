document.getElementById('searchInput').addEventListener('input', searchCharacter);

function searchCharacter() {
    const searchInput = document.getElementById('searchInput').value;
    const apiUrl = `https://swapi.dev/api/people/?search=${searchInput}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayDropdown(data.results);
        })
        .catch(error => {
            console.error('Error al buscar el personaje:', error);
            alert('Error al buscar el personaje. Por favor, inténtalo de nuevo.');
        });
}

function displayDropdown(characters) {
    const dropdown = document.getElementById('dropdown');
    dropdown.innerHTML = '';

    characters.forEach(character => {
        const characterOption = document.createElement('div');
        characterOption.textContent = character.name;
        characterOption.classList.add('dropdown-item');

        characterOption.addEventListener('click', function() {
            displayCharacter(character);
            dropdown.innerHTML = '';
        });

        dropdown.appendChild(characterOption);
    });
}

function displayCharacter(character) {
    const characterInfo = document.getElementById('characterInfo');
    characterInfo.innerHTML = '';

    const name = character.name;
    const height = character.height;
    const mass = character.mass;
    const gender = character.gender;
    const hairColor = character.hair_color;
    const skinColor = character.skin_color;
    const eyeColor = character.eye_color;
    const birthYear = character.birth_year;
    const characterId = extractCharacterId(character.url);
    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;

    let characterHTML = `
        <h2>${name}</h2>
        <img src="${imageUrl}" alt="${name}">
        <p>Altura: ${height} cm</p>
        <p>Peso: ${mass} kg</p>
        <p>Género: ${gender}</p>
        <p>Color de cabello: ${hairColor}</p>
        <p>Color de piel: ${skinColor}</p>
        <p>Color de ojos: ${eyeColor}</p>
        <p>Año de nacimiento: ${birthYear}</p>
    `;

    characterInfo.innerHTML = characterHTML;
}

function extractCharacterId(url) {
    const idRegExp = /\/(\d+)\/$/;
    return url.match(idRegExp)[1];
}