/*
Crea les següents funcions:

Una funció que demani els segons fins que sigui un número enter entre 0 i 359999. Ha de retornar el valor introduït.
El valor retornat per la funció anterior s'ha de passar a una funció que generi i retorni un text amb les hores, minuts 
i segons en format "HH:MM:SS".
Convé crear una funció que, passant-li un número enter entre 0 i 99, retorni el valor amb dos dígits: 5 → "05". 
No cal que aquesta funció comprovi si el valor que se li passa és correcte.
*/

"use strict";
alert("Rasen programador pro");

const MIN = 0;
const MAX = 359999;

let seg = demanarEnterEntre(MIN, MAX);
alert(passarFormatHora(seg));

function demanarEnterEntre(min, max) { //funció que demana 
  let num = prompt("Introdueix els segons: ").trim();
  while (!(EsEnterEntre(num, min, max))) {
    alert("Ha de ser un enter entre " + min + " i " + max);
    num = prompt("Introdueix els segons: ").trim();
  }
  return num;
}

function EsEnterEntre(num, min, max) { //retorna true si és enter, fals altrament
  let esEnter = true;
  if (isNaN(num)) esEnter = false;
  else if (num != Math.floor(num)) esEnter = false;
  else if (num < min) esEnter = false;
  else if (num > max) esEnter = false;
  return esEnter;
}

function passarFormatHora(totSegons) {
  let hora = Math.floor(totSegons / 3600); //calculem les hores
  let min = Math.floor((totSegons % 3600) / 60); //calculem els minuts
  let seg = Math.floor((totSegons % 3600) % 60); //la resta són els segons
  alert("hores: " + hora);
  alert("minuts: "+min);
  alert("segons: " + seg);
  return convertirFormatHora(seg, min, hora);
}

function convertirFormatHora(seg, min, hora) { //converteix en format hora
  let segons = convertir2Digits(seg);
  let minuts = convertir2Digits(min);
  let hores = convertir2Digits(hora);
  return (hores + ":" + minuts + ":" + segons);
}

function convertir2Digits(num) { //converteix i retorna un num en 2 digits en format string
  let numero;
  if (num < 10) numero = "0" + num;
  else numero = "" + num;
  return numero;
}