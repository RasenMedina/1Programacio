/*
3 - Encriptar un text
- Text amb les lletres de la A a la Z
- Text amb les mateixes lletres barrejades o desplaçades
- Introduir un text i encriptar-lo / desencriptar-lo
*/

"use strict";
alert("Rasen programador pro");

alert("Introdueix un text");
let text = demanartext();
let textEncriptat = encriptar1(text);
alert("El text encriptat és: " + textEncriptat);

let pregunta = confirm("Ara vols desencriptar el text encriptat");
if (pregunta == true) {
  let textDesencriptat = desencriptar1(textEncriptat);
  alert("El text desencriptat és: " + textDesencriptat);
} else {
  alert("Mai podràs desencriptar el meu text uahahaha ;)");
}



function demanartext() { //demana i llegeix un número enter. Retorna un enter
  return prompt("Introdueix un text").trim();
}


function encriptar1(text) { //donat un text retorna un altre text barrejant les lletres (encriptat)
  let textNou = "";
  for (let i = 0; i < text.length; i += 4) {
    textNou += text.charAt(i);
  }
  for (let i = 1; i < text.length; i += 4) {
    textNou += text.charAt(i);
  }
  for (let i = 2; i < text.length; i += 4) {
    textNou += text.charAt(i);
  }
  for (let i = 3; i < text.length; i += 4) {
    textNou += text.charAt(i);
  }
  return textNou;
}

//1234 1234 1234 1234
//1111 2222 3333 4444
//yaro slav
//ysalraov
//yrsaaolv

function desencriptar1(textEncriptat) {
  let textNou = "";
  alert ("Length = " + textEncriptat.length/4);
  for (let i = 0; i < (textEncriptat.length/4); i++) {
    for (let j = i; j < (textEncriptat.length); j += (textEncriptat.length/4)) {
      alert ("i: " + i + " j: " +j)
      textNou += text.charAt(j);
      alert(" text nou: " + textNou);
    }
  }
  return textNou;
}

