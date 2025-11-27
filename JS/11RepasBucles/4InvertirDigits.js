"use strict";
alert("Rasen programador pro");

/*
Utilitzant un bucle i l'operador % (mòdul o residu), mostra en ordre invers els dígits d'un número llarg (per exemple 1234567890).
Opcionalment, utilitza un string per guardar els dígits en ordre invers i converteix a número per mostrar-lo.
*/

//Preguntem i comprovem les vegades que vol que es llenci la moneda
let num = parseInt(prompt("Introdueix un número (>0)").trim());
while (isNaN(num) || num <= 0) {
  if (isNaN(num)) alert("Ha de ser un número NO una lletra!");
  else alert("Ha de ser un número positiu");
  num = parseInt(prompt("Introdueix un número (>0)").trim());
}

let num2 = num;
num = "" + num;;
let nDigits = num.length;
let missatge = "";

for (let i = 0; i < nDigits; i++) {
  missatge += (num2 % 10);
  num2 = parseInt(num2/10);
}
missatge = "L'invers de " + num + " és " + parseInt(missatge);
console.log(missatge);