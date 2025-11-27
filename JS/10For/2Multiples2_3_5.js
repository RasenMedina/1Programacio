"use strict";
alert("Rasen programador pro");

/*
Utilitza un bucle for per trobar els números que son múltiples de 2, de 3 o de 5 entre 1 i 100.
Per cada resultat, ha d'indicar de quin(s) número(s) és multiple.

Repeteix el mateix però per trobar els números que siguin múltiples de 2, de 3 i de 5 a la vegada.
*/


let multiples2="";
let multiples3="";
let multiples5="";
let multiples2_3_y5="";

for (let i=1;i<=100;i++){
    if(i%2==0) multiples2 += i + " ";
    if(i%3==0) multiples3 += i + " ";
    if(i%5==0) multiples5 += i + " ";
    if(i%2==0 && i%3==0 && i%5==0) multiples2_3_y5 += i + " ";
}

alert ("Mútiples de 2: " + multiples2);
alert ("\nMútiples de 3: " + multiples3);
alert ("\nMútiples de 5: " + multiples5);
alert ("\nMútiples de 2,3 y 5: " + multiples2_3_y5);

/*
// Múltiples de 2, 3 o 5
for (int i = 1; i <= 100; i++) {
    if (i % 2 == 0) alert(i + " és múltiple de 2");
    if (i % 3 == 0) alert(i + " és múltiple de 3");
    if (i % 5 == 0) alert(i + " és múltiple de 5");
}

// Múltiples de 2, 3 i 5 (de tots)
for (int i = 1; i <= 100; i++) {
    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0)
        alert(i + " és múltiple de 2, 3 i 5");
}
*/
