function buscarPersonaje() {
    let nombre = document.getElementById("character-name").value;
    let request = "https://www.swapi.tech/api/people/" + nombre;
  
    fetch(request)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let p = document.getElementById("character-name");
        if (data.results.length > 0) {
          p.innerHTML = JSON.stringify(data.results[0]);
        } else {
          p.innerHTML = "No se encontró ningún personaje con ese nombre.";
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  