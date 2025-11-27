

/*
Crea les següents funcions:

Una funció que, passant-li un número entre 1 i 12 i un altre amb l'any, retorni el nombre de dies 
que té el mes o -1 si el mes no és correcte.
Aquest mètode hauria d'aprofitar la funció creada anteriorment per saber si és any de traspàs.
A partir del valor retornat, el programa ha de mostrar quants dies té el mes o mostrar un missatge d'error 
indicant que el mes ha de ser un número entre 1 i 12.
*/

"use strict";
alert("Rasen programador pro");

alert ("Introdueix un any (>0) i un número de mes (>0 i <13)");
let any = demanarEnter();
while (any<0){ //any positiu
    alert ("Ha de ser un any positiu");
    any = demanarEnter();
}
let mes = demanarEnter();
while (mes<1 || mes >12){ //entre 1 i 12
    alert ("Ha de ser un número entre 1 i 12");
    mes = demanarEnter();
}
alert (mesAny(mes, any));


function demanarEnter (){ //demana i llegeix un número enter. Retorna un enter
    let enter = parseInt(prompt("Introdueix un enter").trim());
    while (isNaN(enter)){
      alert ("Ha de ser un enter NO UNA LLETRA!!!")
      enter = parseInt(prompt("Introdueix un enter").trim());
    }
    return enter;
}

function mesAny (mes, any){ //A partir d'un número de 1 a 12 retorna el mes de l' any i els dies del mes
  let dia = "A l'any "+ any + " , el mes de ";
  switch (mes){
    case 1:
      dia += "Gener té 31 dies";
      break;
    case 2:
      if (esDeTraspas(any)) dia += "Febrer té 29 dies";
      else dia += "Febrer té 28 dies";
      break;
    case 3:
      dia += "Març té 31 dies";
      break;
    case 4:
      dia += "Abril té 30 dies";
      break;
    case 5:
      dia += "Maig té 31 dies";
      break;
    case 6:
      dia += "Juny té 30 dies";
      break;
    case 7:
      dia += "Juliol té 31 dies";
      break;
    case 8:
      dia += "Agost té 31 dies";
      break;
    case 9:
      dia += "Setembre té 30 dies";
      break;
    case 10:
      dia += "Octubre té 31 dies";
      break;
    case 11:
      dia += "Novembre té 30 dies";
      break;
    case 12:
      dia += "Desembre té 31 dies";
      break;
    default:
      alert ("El mes ha d'estar entre 1 i 12!!!"); 
  }
    return dia; 
}

function esDeTraspas(any){ //retorna cert si és de traspàs, fals altrament 
  return (any%4==0 && !(any%100==0)||(any%400==0)); //divisible por 4 pero no por 100, o divisible por 400
}