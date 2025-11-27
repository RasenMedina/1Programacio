"use strict";
alert("Rasen programador pro");

/*
Fes un programa que calculi el factorial d'un número enter entre 1 i 20 introduït per l'usuari.

El factorial de N és N*(N-1)*(N-2)*....*2*1
Per exemple, el factorial de 5 és 120: 5*4*3*2*1
*/

let total = parseInt(prompt("Introdueix un número enter més gran que 0:").trim());
let factor = total-1;

if(total<1){
    alert("El número ha de ser positiu");
}

else{
    while (factor >= 1) {
        total *= factor; 
        factor -= 1;
    }

    alert("El factorial és "+ total);
}

/*
let num, factorial;

num = parseInt(prompt("Introdueix un número enter més gran que 0"));

factorial = num;

while (num > 1) {
    --num;
    factorial *= num;
}

alert("El factorial és " + factorial);


*/





