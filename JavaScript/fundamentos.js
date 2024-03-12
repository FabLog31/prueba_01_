// Este es un comentario de Java Script de una sola línea
/*
este es un
comentario de
varias líneas
*/

/* Métodos de interacción */
// Salida
alert("nothing is gonna work from this point!")
console.log("Mensaje a la consola")
document.write("Mensaje en interfaz de usuario")


// entrada
let entrada = prompt()
entrada = prompt("Escriba su nombre")
console.log(entrada)

/* VARIABLES */
// Declaración de variables
/*  Saludo1 = "Hola"

 var saludo2 = "Hola 2"
 let saludo3 = "hola 3"
 const saludo4 = "Hola 4"

 console.log(Saludo1)
 console.log(saludo2)
 console.log(saludo3)
 console.log(saludo4) */


// Ambito de las variables
/* let variableglobal = "soy variable global"
 console.log(variableglobal)

 {
    variablelocal = "soy variable local"
    console.log(variablelocal)
 } */

/* let cambiaValor = 1;
 const nocambiaValor = 2;

 cambiaValor = "1";
 //nocambiaValor = 2;

 console.log(cambiaValor)
 console.log(nocambiaValor) */

/* Modo estricto */
"use strict"

/* Tipos de datos primitivos */


// String


/* let miVariable = "este es un texto de ejemplo 1"
miVariable = 'este es un texto de "ejemplo 2"'
miVariable = "este es un texto de ejemplo 3"
console.log(miVariable)
console.log(typeof miVariable);

// Number   
miVariable = 10;
miVariable = 9.5;
miVariable = 123e5;
miVariable = 0xFF;
// Boolean
miVariable = true;
miVariable = false;
console.log(miVariable) */

/* expresiones booleanas */

// Thruly o verdadero
/* console.log(true)
console.log(1)
console.log(-1)
console.log("a")
// False o falsos
console.log(false)
console.log(0))
console.log("")
console.log(undefined)
console.log(null) */

// Undefined     
/* let miVariableSinAsignacion;
console.log(miVariableSinAsignacion) */

/* Operador TypeOf 

let EntradaDato = "123"
console.log(EntradaDato);
console.log(typeof EntradaDato);
EntradaDato = 123;
console.log(EntradaDato);
console.log(typeof EntradaDato);

/* Conversión de Tipos */
/* let numero1 = "5";
let numero2 = "3";
let numero3 = "10";
let resultado = numero1 + numero2 + numero3;
console.log(resultado);
numero1 = Number(numero1);
numero2 = parseInt(numero2);
numero3 = +numero3
resultado = numero1 + numero2;
console.log(resultado); */

/* let numeroDecimal1 = '1.5';
let numeroDecimal2 = '2.5';
let numeroDecimal3 = '3.5';
let resultado = numeroDecimal1 + numeroDecimal2 + numeroDecimal3;
console.log(resultado);
numerodecimal1 = parseFloat(numeroDecimal1);
numerodecimal2 = parseFloat(numeroDecimal2);
numeroDecimal3 = Number(numeroDecimal3);
resultado = numerodecimal1 + numerodecimal2 + numeroDecimal3;
console.log(resultado);
*/ 


/*
let telefono = '555';
let CodigoPais = '57';
console.log(telefono);
console.log(typeof telefono);
console.log(CodigoPais);
console.log(typeof CodigoPais);
*/


/* Control de Flujo */
// CONDICIONALES

/* if (true) {
    console.log("se cumple la condición 1")
}

if (false) {
    console.log("se cumple la condición 2")
} else {
    console.log("no se cumple la condición 2")
}

const perfil = "estudiante" */

// KEYWORD!!! SWITCH

/* const NombreUsuario = prompt("Ingresa tu nombre de usuario, por favor (si no tienes, está bien)")
// console.log("¡Nueva entrada de info!")

switch (NombreUsuario){
    case "":
        document.write("¡Muy buen día!");
        break;
    default:
        document.write("!Hola, " + NombreUsuario + "!");
        break;
}
*/ 

/* const nombre = prompt("Ingrese su nombre, por favor");
const apellido = prompt("Ingrese su apellido, por favor");
console.log(nombre + " " + apellido);
// document.write(nombre + " " + apellido)
document.write(`Su nombre completo es: ${nombre} ${apellido}`); */ 
