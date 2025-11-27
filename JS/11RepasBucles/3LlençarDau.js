"use strict";
alert("Rasen programador pro");

/*
Llença el dau 1 milió de vegades i comptabilita en tant per cent les vegades que surt cada número.
Utilitza un switch per comptar cada resultat.

Si estas pensant en fer-ho amb dos daus o amb daus de 12 o 20 cares, millor espera a aprendre què són i com funcionen els arrays.
*/

const cara1 = 1;
const cara2 = 2;
const cara3 = 3;
const cara4 = 4;
const cara5 = 5;
const cara6 = 6;

//Preguntem i comprovem les vegades que vol que es llenci la moneda
let nVegades = parseInt(prompt("Digues el número de vegades que vols que es llenci el dau (>1)").trim());
while (isNaN(nVegades) || nVegades < 1) {
  if (isNaN(nVegades)) alert("Ha de ser un número NO una lletra!");
  else alert("Ha de ser un número (>1)");
  nVegades = parseInt(prompt("Digues el número de vegades que vols que es llenci el dau (>1)").trim());
}
let nCara1 = 0,
nCara2 = 0,
nCara3 = 0,
nCara4 = 0,
nCara5 = 0,
nCara6 = 0;
let dau, missatge = "";

for (let i = 0; i < nVegades; i++) {
  dau = Math.floor(Math.random() * (cara6 - cara1 + 1) + cara1);
  switch (dau) {
    case cara1:
      nCara1++;
      break;
    case cara2:
      nCara2++;
      break;
    case cara3:
      nCara3++;
      break;
    case cara4:
      nCara4++;
      break;
    case cara5:
      nCara5++;
      break;
    case cara6:
      nCara6++;
      break;
    default:
      alert("Hi ha hagut algun problema al tirar el dau");
  }
}
missatge += "% Número 1: " + (nCara1 * 100 / nVegades).toFixed(2) + "%\n";
missatge += "% Número 2: " + (nCara2 * 100 / nVegades).toFixed(2) + "%\n";
missatge += "% Número 3: " + (nCara3 * 100 / nVegades).toFixed(2) + "%\n";
missatge += "% Número 4: " + (nCara4 * 100 / nVegades).toFixed(2) + "% \n";
missatge += "% Número 5: " + (nCara5 * 100 / nVegades).toFixed(2) + "% \n";
missatge += "% Número 6: " + (nCara6 * 100 / nVegades).toFixed(2) + "% \n";

console.log(missatge);