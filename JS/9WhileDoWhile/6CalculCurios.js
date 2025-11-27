"use strict";
alert("Rasen programador pro");

/*
Escriu un programa que, a partir d'un número enter més gran que 0, faci les següents operacions fins que el resultat sigui 1:

Si el número és parell, dividir-lo entre 2.
Si el número és imparell, multiplicar-lo per 3 i sumar-li 1.
Al final, el programa ha de mostrar quantes iteracions ha hagut de fer.
*/

let num = parseInt(prompt("Introdueix un número entre 1 i 100").trim());
let iteracions=0;

if (isNaN(num)) alert("Has d'introduir un número");
else if(num<1 || num>100) alert ("El número ha d' estar entre 1 i 100");
else{    
    while (num != 1) {
        if (num%2 == 0){ //número parell
            num /=2;
        }
        else { //número senar
            num = num*3+1;
        }
        alert(num);
        iteracions++;
    }
    alert("Iteracions: " + iteracions);
}


