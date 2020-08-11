'use strict'


/*
Programa que pida dos numeros y nos diga cual es mayor o cual es menor
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0))
var numero2 = parseInt(prompt("Introduce el segundo número", 0))

if(numero1 == numero2){
    console.log("Los números son iguales")
}else if(numero1 > numero2){
    console.log("El numero 1 es mayor que el número 2")
}else{
    console.log("El numero 2 es mayor que el número 1")
}

