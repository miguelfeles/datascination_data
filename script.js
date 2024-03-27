// Variable de la API para extraer la info
const apiUrl = 'https://swapi.dev/api/people/';

async function getCharacters() { // Funcion que me trae los personajes
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const characters = data.results;

        const characterList = document.getElementById('character-list');

        characters.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('col-md-3', 'mb-4'); // Diseño de tarjetas

            card.innerHTML = `
            <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">Altura: ${character.height}</p>
                        <p class="card-text">Peso: ${character.mass}</p>
                        <p class="card-text">Genero: ${character.gender}</p>
                        <p class="card.text">Skin: ${character.skin_color}</p>

                        <a href="${character.homeworld}" class="btn btn-primary">Planeta</a>
                    </div>
                </div>
            </div>`;

            characterList.appendChild(card);
        });
    } catch (error) {
        console.error('Error al obtener personajes:', error);
    }
}

window.onload = getCharacters;
