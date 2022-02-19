//Comentarios JavaScript

//Variables en JavaScript, se guardan en la memoria RAM

//Declaro una variable, le asigno un espacio
let nombre;

var apellido;

//Declaración de variables correcta
let $provincia= "Bs. As."
let _pasis = "Argentina"

//let 1234 = NO se pueden declarar variables numéricas
//let -empleado = NO se puede declarar una variable con guión medio

let nombreEmpresa = "Camel Case" //COrrecta escritura

//Otras variables en JS BOOLEAN
let falso= false;
let verdadero= true;

//Declaración y asignación de valor a una variable
const DNI = 123456789;

//Asignar un valor a la variable (se pueden usar ambos tipos de comillas)
nombre = 'Magdalena';
apellido = "Cueto";

let pais = "Argentina";

console.log(`Mi nombre es: ${nombre} ${apellido} y vivo en ${pais}. Mi DNI es: ${DNI}.`);

//Array - Vectores

let frutas= ['naranja', 'mandarina', 'manzana', 'pera', 'cituela', 'banana'];
let calificaciones=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Acceso a los arrays
console.log(frutas);
console.log(calificaciones);

//Métodos de los arrays
frutas.push('pomelo');
frutas.push('sandía');

//Acceso al DOM (a los documentos de html)
document.write(`Frutas ${frutas}`);
//Seleccionar un elemento del array
document.write(`<h1>Fruta Nº1: ${frutas[0]}</h1>`);

//BUCLE FOR sin bucle for
//document.write(`<h1>Fruta Nº1: ${frutas[1]}</h1>`);

//document.write(`<h1>Fruta Nº1: ${frutas[2]}</h1>`);

//document.write(`<h1>Fruta Nº1: ${frutas[3]}</h1>`);

//BUCLE FOR CORRECTAMENTE
for (let i= 0;i< frutas.length;i++){
    document.write(`<h1>Fruta Nº1: ${frutas[i]}</h1>`);
}

