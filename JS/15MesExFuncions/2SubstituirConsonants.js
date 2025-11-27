

/*
2 - Introduir un text i substituir totes les consonants per #
*/

"use strict";
alert("Rasen programador pro");

alert ("Introdueix un text");
let text = demanartext();
let textNou = "";
for (let i=0; i<text.length; i++){
  if (esVocal(text.charAt(i))){
    textNou += text.charAt(i);
  }
  else textNou += "#";
}
alert ("El text nou és: " + textNou);

function demanartext (){ //demana i llegeix un número enter. Retorna un enter
    return prompt("Introdueix un text").trim();
}

function esVocal (lletra){ //retorna true si és una vocal, fals altrament
  let esVocal = false;
  switch (lletra){
    case "a":
      esVocal = true;
      break;
    case "e":
      esVocal = true;
      break;
    case "i":
      esVocal = true;
      break;
    case "o":
      esVocal = true;
      break;
    case "u":
      esVocal = true;
      break;
    default: 
      esVocal = false;
  }
  return esVocal;
}

