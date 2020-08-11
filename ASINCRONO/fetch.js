'use strict'


// Fetch


window.addEventListener("load",() => {

var divUsuarios = document.querySelector("#usuarios");

fetch('https://reqres.in/api/users')
    .then(data => data.json())
    .then(users => {
        var usuarios= users.data;
        console.log(usuarios)
        
        usuarios.map((users,i) =>{
            let nombre = document.createElement("h2");
            
            nombre.innerHTML= i + users.first_name;
            divUsuarios.appendChild(nombre);
        })
    })

})