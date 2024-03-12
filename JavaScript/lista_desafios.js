/* 1- Hacer un programa que salude y que envíe un mensaje en la consola e interfaz de usuario. */

//Desafio 1:
/*
console.log("It works!")

document.write("hola") 
*/

/* 2- Hacer un programa que reciba nombre por parte del usuario. Si existe nombre, saludar con el nombre. Si no, solo saludar. */

// Desafio 2:
/*
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
*/

/* 3- Hacer un programa que reciba nombre y apellidos aparte y que muestre el nombre completo. */

// Desafio 3:
/*
const nombre = prompt("Ingrese su nombre, por favor");
const apellido = prompt("Ingrese su apellido, por favor");
console.log(nombre + " " + apellido);
// document.write(nombre + " " + apellido)
document.write(`Su nombre completo es: ${nombre} ${apellido}`);  
*/

/* 4- Hacer un programa que reciba 2 números del usuario y los sume */

// Desafio 4:
/*
const numero1 = Number(prompt("Ingrese el primer número para suma"));
const numero2 = parseInt(prompt("Ingrese el segundo número para suma"));
console.log(numero1 + numero2 + ": ");
document.write(numero1 + numero2 + ": ");
document.write(`La suma de ${numero1} y ${numero2} es ${numero1 + numero2}`); 
*/

/* 5- Hacer un programa que reciba del usuario un número y muestre si es cero. 
De otra manera, que muestre si el número ingresado es positivo, o si es negativo.*/

// Desafio 5:
/*
const numeroadivinar = prompt("Ingresa un número entre 0, un número positivo o un número negativo, por favor:");
numeroadivinar = parseFloat(numeroadivinar);
if (numeroadivinar === 0) {
    console.log("El número ingresado es cero.");
    document.write("El número que has digitado es cero")
} 
else if (numeroadivinar > 0) {
    console.log("El número ingresado es positivo.");
    document.write("El número que has digitado es un número positivo")
} 
else {
    console.log("El número ingresado es negativo.");
    document.write("El número que has digitado es un número negativo")
}
*/

// 6- Hacer un programa que reciba del usuario dos números y que muestre cuál es el número mayor y cuál es el número menor entre ellos.

//Desafio 6:
/*
let numero1 = prompt("Ingrese el primer número para comparación:");
let numero2 = prompt("Ingrese el segundo número para comparación:");
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
if (numero1 > numero2) {
    console.log("El número mayor es: " + numero1);
    console.log("El número menor es: " + numero2);
    document.write("El número mayor es: " + numero1);
    document.write(" y el número menor es:" + numero2);
} else if (numero2 > numero1) {
    console.log("El número mayor es: " + numero2);
    console.log("El número menor es: " + numero1);
    document.write("El número mayor es: " + numero2);
    document.write(" y el número menor es:" + numero1);
} */
