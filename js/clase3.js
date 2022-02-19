//Funciones
//creo una funcion
function sumar(){
    let resultado = 100 + 50;
    console.log (resultado);
}
//Llamo a la funcion
sumar();

//Funciones con parametros - argumentos - informaciones
let numero1 = 50;
let numero2 = 80;

function multiplicar (a, b){
    let resultado = a*b;     
    console.log ("Multi = " + resultado); 
}

multiplicar(numero1, numero2);
multiplicar(25,10);
multiplicar("uno","dos");
//----------------------------------------//

//Operadores matemáticos
let suma= 45+30;
console.log('El resultado de la suma es: ' + suma);

let division= 45/30;
console.log('El resultado de la division es: ' + division);

//Operador Módulo
if(division % 2 == 0) {
    console.log ("El numero es par");
} else{
    console.log ("El numero es impar"); 
}
//operadores relacionales
console.log ("======================================================");
let edad = 27;
let localidad = "Mendoza";

if (edad == 17){
    console.log ("Podes entrar si estas acompañado");
}else {
    console.log ("No podes entrar y menos tomar");
}

if (edad > 18){
    console.log ("Podes consumir bebidas");
}else {
    console.log ("No podes entrar y menos tomar");
}

if (edad >= 18){
    console.log ("Podes consumir bebidas");
}else {
    console.log ("No podes entrar y menos tomar");
}

if (edad < 17){
    console.log ("Tenes que volver a tu casa");
}


console.log ("======================================================");

//Operadores lógicos
if (edad >= 18 && localidad == 'Mendoza'){ //no cumple las dos condiciones
    console.log ("Podes venir a la fiesta");
}else {
    console.log ("No podes llegar a tiempo, lo siento.");
}
//Operador lógico O ||
if (edad >= 18 || localidad == 'Mendoza'){
    console.log ("Podes venir a la fiesta");
}else {
    console.log ("No podes llegar a tiempo, lo siento.");
}

let verdadero = true;
let falso = false;

console.log(verdadero);
console.log(falso);

//Operador de negación
console.log(!verdadero);
console.log(!falso);

let dato= "hola";

console.log(dato);
console.log("hola" !=dato);
console.log(150 !=dato);

let valor= 2000;
console.log(valor);
//Incremento
valor++;
console.log(valor);
//Decremento
valor--;
console.log(valor);

//if largo
//let edad = 27;
//if (edad >= 18){
//    console.log ("Podes consumir bebidas");
//}else {
//    console.log ("No podes entrar y menos tomar");
//}

//if ternario (versión acotada)
let ternario= (edad >=18) ? 'sos mayor de edad':'sos menor de edad' ;
console.log(ternario);