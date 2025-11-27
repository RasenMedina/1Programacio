
/*
Crea les següents funcions:

Una funció que, passant-li l'any, retorni true o false depenent de si és any de traspàs o no.
A partir de l'any i del valor retornat, el programa ha de mostrar el missatge "L'any XXXX és any de traspàs" 
o  "L'any XXXX NO és any de traspàs".
*/

"use strict";
alert("Rasen programador pro");

let any = demanarEnter();
alert (missatgeAnyTraspas(any,esDeTraspas(any)));

function demanarEnter (){ //demana i llegeix un número enter
    let enter = prompt("Introdueix una data").trim();
    while (isNaN(enter)){
      alert ("Ha de ser un enter NO UNA LLETRA!!!")
      enter = prompt("Introdueix una data").trim();
    }
    return enter;
}

function esDeTraspas(any){ //retorna cert si és de traspàs, fals altrament 
  return (any%4==0 && !(any%100==0)||(any%400==0)); //divisible por 4 pero no por 100, o divisible por 400
}


function missatgeAnyTraspas (any, esDeTraspas){ //retorna el missatge depenent de si l' any és de traspàs o no
  let missatge = "";
  if (esDeTraspas) missatge += ("L' any " + any + " és any de traspàs");
  else missatge += ("L' any " + any + " NO és any de traspàs");
  return missatge; 
}