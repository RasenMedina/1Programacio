"use strict";

//CLASSE 3

let s = "" + 123;    // s = "123"
alert (s+2)
let v = 25;
s = v.toString();    // s = "25"

let n = parseInt("123");    // n = 123
alert(n);
n = parseFloat("123");      // n = 123.0
alert(n);

n = parseInt("123.8");      // n = 123    (no arrodoneix)
alert (n);     
n = parseFloat("123 Hola"); // n = 123.0  (només té en compte els números del principi)
alert (n);
n = parseFloat("Hola 123"); // n = NaN    (si no hi ha números al principi del text, retorna NaN)
alert(n);

let numero = "123,8";
alert (numero)
numero = numero.replace(",", ".");
let valor = parseFloat(numero);
alert(valor);

v = 123.456789;
let t = v.toFixed(2);    // t = "123.45"
alert (t);

v = 1234567.89;
t = v.toLocaleString();          // t = "1.234.567,89"
alert(t);
t = v.toLocaleString("en-US");   // t = "1,234,567.89"
alert(t);

let resposta = confirm("Segur que vols esborrar les dades?");
if (resposta == true) alert("S'han esborrat les dades");

let capital = prompt("Quina és la capital de Portugal?");
capital = capital.trim();
capital = capital.toUpperCase();
if (capital == "LISBOA") alert("Correcte!");

let edat = prompt("Quina edat tens?");
edat = parseInt(edat.trim());
if (edat >= 18) alert("Ja ets major d'edat!");

let altura = prompt("Quants metres medeixes?");
altura = parseFloat(altura.trim().replace(",", "."));
if (altura >= 1.9) alert("Pots jugar en la lliga professional de bàsquet!");

