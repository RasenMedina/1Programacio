"use strict";
alert("Rasen programador pro");

/*
Al llençar dues monedes, es poden produir 3 casos:

Que surtin dues cares
Que surtin dues creus
Que surti una de cada
Fes un bucle que simuli el llençament 1000000 de vegades i que compti quantes vegades surt cada cas.
S'ha de mostrar el resultat en percentatges.

Quin percentatge creus que sortirà de cada cas?
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
let moneda1, moneda2, n2Cares=0, n2Creus=0, n1Cara1Creu=0;
let missatge ="";

for(let i=0;i<nVegades;i++){ //0 és cara i 1 és creu
  moneda1=Math.floor(Math.random()*(MAX-MIN+1)+MIN);
  moneda2=Math.floor(Math.random()*(MAX-MIN+1)+MIN);
  if(moneda1==0 && moneda2==0) n2Cares++;
  else if(moneda1==1 && moneda2==1) n2Creus++;
  else n1Cara1Creu++;
}
missatge += "2 cares: "+(n2Cares*100/nVegades).toFixed(2)+"% \n";
missatge += "2 creus: "+(n2Creus*100/nVegades).toFixed(2)+"% \n";
missatge += "1 cara i 1 creu: "+(n1Cara1Creu*100/nVegades)+"%";

console.log(missatge);



