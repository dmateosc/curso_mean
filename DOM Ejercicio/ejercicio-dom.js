'use strict'

window.addEventListener("load", function(){
    console.log("DOM cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");

    box_dashed.style.display = "none";

    formulario.addEventListener("submit", function(){
        console.log("Evento submit capturado");
        
        var nombre = document.querySelector("#nombre");
        var apellidos = document.querySelector("#apellidos");
        var edad = document.querySelector("#edad");

        box_dashed.style.display = "block";
        console.log(nombre,apellidos, edad)

        var contenidoBox = document.querySelector("#contenidobox");
        var datos_usuario = [nombre, apellidos,edad];
        datos_usuario.forEach(elemento => {
            var parrafo = document.createElement("p")
            parrafo.setAttribute("id", "p_"+elemento.id)
            parrafo.append(elemento.id.replace(/^\w/,(c) => (c.toUpperCase()))+": "+elemento.value)
            contenidoBox.append(parrafo)
        })
        
    })

    


})