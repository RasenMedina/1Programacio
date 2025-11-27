"use strict";
alert("Rasen programador pro");

/*
Fes un bucle que simuli el llençament d'una moneda 1000 vegades i que compti quantes vegades surt cara i quantes surt creu.
*/

const MIN=0;
const MAX=1;

//Preguntem i comprovem les vegades que vol que es llenci la moneda
let nVegades=parseInt(prompt("Digues el número de vegades que vols que es llenci la moneda (>1)").trim());
while (isNaN(nVegades) || nVegades<1){
  if (isNaN(nVegades)) alert("Ha de ser un número NO una lletra!"); 
  else alert("Ha de ser un número (>1)"); 
  nVegades=parseInt(prompt("Digues el número de vegades que vols que es llenci la moneda (>1)").trim());
}
let num, nCares=0, nCreus=0;
let missatge ="";

for(let i=0;i<nVegades;i++){
  num=Math.floor(Math.random()*(MAX-MIN+1)+MIN);
  if (num==0) nCares++;
  else nCreus++;
}
missatge += "Cares: "+nCares+"\n";
missatge += "Creus: "+nCreus;
console.log(missatge);



