function fetchEpisodeData(inputValue) {
    return fetch(`https://www.swapi.tech/api/people/`)
        .then((res) => res.json()) 
        .then((data) => {
            for (let i = 0; i < data.results.length; i++) {
                if (inputValue == data.results[i].name) {
                    return fetch(`${data.results[i].url}`)
                        .then((res) => res.json())
                        .then((data2) => {
                            return JSON.stringify(data2.result.properties);
                        });
                }
            }
            // If the loop completes without finding a matching character, return null
            return "Nadita";
        })
        .catch((err) => {
            console.error(err);
            return null;
        });
}

document.addEventListener('DOMContentLoaded', function() {
    var inputElement = document.getElementById('textico');
    inputElement.addEventListener('keyup', function(event) {
        const texto = inputElement.value;
        fetchEpisodeData(texto)
            .then((name) => {
                if (name) {
                    document.getElementById('contenedorr').innerHTML = '<div id="idChild">' + name + '</div>';
                } else {
                    document.getElementById('contenedorr').innerHTML = '<div id="idChild">Character not found</div>';
                }
            });
    });
});