'use strict'

//LocalStorage

window.addEventListener("load", () => {
    // Comprobar disponibilidad del localStorage
    if (typeof (Storage) !== 'undefined') {
        console.log("LocalStorage disponible");
    } else {
        console.log("LocalStorage no es compatible");
    }


    //Guardar datos
    localStorage.setItem("titulo", "Curso de Symfony");

    var elemento = localStorage.getItem("titulo");
    var peliculas = document.querySelector("#peliculas");
    peliculas.innerHTML = elemento;

    //Guardar objetos
    var usuario = {
        nombre: "David Mateos",
        email: "mateoscano.david@gmail.com",
        web: "mateoscano.com"
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    var userJSON = JSON.parse(localStorage.getItem("usuario"));

    peliculas.append(userJSON.nombre);

    localStorage.clear();



})