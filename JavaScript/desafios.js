"use strict";
// Hacer un programa que salude
/* console.log("It works!")

document.write("hola") */

// Hacer programa que salude

// const NombreUsuario = prompt("Ingresa tu nombre de usuario, por favor (si no tienes, está bien)")
// console.log("¡Nueva entrada de info!")

/* let numeroDecimal1 = '1.5';
let numeroDecimal2 = '2.5';
let numeroDecimal3 = '3.5';
console.log(resultado);
resultado = numeroDecimal1 + numeroDecimal2 + numeroDecimal3;


numerodecimal1 = parseFloat(numeroDecimal1);
numerodecimal2 = parseFloat(numeroDecimal2);
numeroDecimal3 = Number(numeroDecimal3);
console.log(resultado);
resultado = numerodecimal1 + numerodecimal2 + numeroDecimal3; */

/*
let telefono = '555';
let CodigoPais = '57';
console.log(telefono);
console.log(typeof telefono);
console.log(CodigoPais);
console.log(typeof CodigoPais);
*/

/*
Desafio 1:
switch (NombreUsuario){
    case "":
        document.write("¡Muy buen día!");
        break;
    default:
        document.write("!Hola, " + NombreUsuario + "!");
        break;
}
*/
const NombreUsuario = prompt("Ingresa tu nombre de usuario, por favor (si no tienes, está bien)")
// console.log("¡Nueva entrada de info!")
switch (NombreUsuario){
    case "":
        document.write("¡Muy buen día!");
        break;
    default:
        document.write("!Hola, " + NombreUsuario + "!");
        break;
}