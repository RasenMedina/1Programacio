"use strict";
alert("Rasen programador pro");

/*
Utilitza bucles for per dibuixar amb diferents símbols un gràfic de barres amb 3 valors.

El gràfic s'ha de dibuixar en horitzontal i les barres han de tenir amplada 2.

Opcional: intenta fer el gràfic en vertical i amb una amplada de 5 per cada barra.
Primer pots provar a fer-ho invertit (les barres cap avall) i després amb les barres cap amunt.
*/

//Preguntem i comprovem el valor 1
let val1=parseInt(prompt("Introdueix el valor 1(1-100)").trim());
while (isNaN(val1) || val1<1 || val1>100){
    alert("Ha de ser un número entre 1 i 100");
    val1=parseInt(prompt("Introdueix el valor 1(1-100)").trim());
}
//Preguntem i comprovem el valor 2
let val2=parseInt(prompt("Introdueix el valor 1(1-100)").trim());
while (isNaN(val2) || val2<1 || val2>100){
    alert("Ha de ser un número entre 1 i 100");
    val2=parseInt(prompt("Introdueix el valor 1(1-100)").trim());
}
//Preguntem i comprovem el valor 3
let val3=parseInt(prompt("Introdueix el valor 1(1-100)").trim());
while (isNaN(val3) || val3<1 || val3>100){
    alert("Ha de ser un número entre 1 i 100");
    val3=parseInt(prompt("Introddueix el valor 1(1-100)").trim());
}

let max=Math.max(val1,val2,val3);
let missatge="";

for(let i=0;i<max;i++){
  if(i<(max-val1)) missatge += "     ";
  else missatge += "#####";
  missatge += " ";
  if(i<(max-val2)) missatge += "     ";
  else missatge += "OOOOO";
  missatge += " ";
  if(i<(max-val3)) missatge += "     ";
  else missatge += "XXXXX";
  missatge += "\n";
}
console.log(missatge);







