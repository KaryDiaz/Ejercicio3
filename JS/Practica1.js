
/* Le pregunta al usuario su nombre y edad y le dice si es mayor o menor */


/* let nombre = prompt("¿Cual es tu nombre?");
do {

    var edad = prompt("¿Que edad tienes?");

} while (isNaN(edad));


if (edad>17) {
    alert("Hola " + nombre + ", felicidades, tienes " + edad + " años, ya eres mayor de edad :D");
    
} else {
    alert("Hola " + nombre + ", tienes solo " + edad + " años, todavía tas chiquito, vuelve cuando seas mayor de edad c:");    
} */


/* ------------------------------------------------------------------------------------------------ */


/* Le permite al usuario ingresar un numero y le dice si ese es par o impar */

/* do {
    var numero = prompt("Ingrese un número");
} while (isNaN(numero));


if (numero%2==0) {
    alert("el número ingresado es par");
    
} else { 
    alert("el número ingresado es impar");
    
}
 */

/* --------------------------------------------------------------------------------------------- */

/* programa pide 3 numeros y los ordena de mayor a menor */

let miLista = [];
let num1;
let num2;
let num3;
let lug1;
let lug2;
let lug3;

do {
   num1= prompt("Ingrese el primer numero");
   miLista.push(num1);
   
} while (isNaN(num1));

do {
    num2= prompt("Ingrese el segundo numero");
    miLista.push(num2);
    
} while (isNaN(num2));

do {
    num3= prompt("Ingrese el tercer numero");
    miLista.push(num3);
    alert(miLista);
    
} while (isNaN(num3));

/* [num1,num2,num3] */

if (num3<num2) {
    lug1=num2;
    miLista[1]=num3;
    miLista[2]=lug1;
    alert(miLista);
    alert("primer if");
}

if (num3<num1) {
    lug2=num1;
    miLista[0]=num3;
    miLista[1]=lug2;
    alert(miLista);
    alert("segundo if");
}

if (num2<num1) {
    lug1=num2;
    lug2=num1;
    lug3=lug2;
    miLista[1]=lug1;
    miLista[2]=lug3;
    alert(miLista);  
    alert("tercer if");  
}

