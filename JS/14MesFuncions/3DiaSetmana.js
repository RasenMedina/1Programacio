
/*
Crea les següents funcions:

Una funció que, passant-li un número entre 1 i 7, retorni el nom del dia de la setmana o el missatge 
"El dia ha d’estar entre 1 i 7".
A partir del valor retornat, el programa ha de mostrar el dia de la setmana o el missatge d'error.
*/

"use strict";
alert("Rasen programador pro");


let enter = (demanarDiaSetmana());
alert (diaSetmana(enter));


function demanarDiaSetmana (){ //demana i llegeix un número entre 1 i 7
    let enter = parseInt(prompt("Introdueix un enter"));
    while (isNaN(enter) || enter<1 || enter>7){
      alert ("Ha de ser un enter NO UNA LLETRA!!!")
      enter = parseInt(prompt("Introdueix un enter"));
    }
    return enter;
}

function diaSetmana (num){ //A partir d'un número de 1 a 7 retorna un dia de la setmana
  let dia = ""
  switch (num){
    case 1:
      dia = "Dilluns";
      break;
    case 2:
      dia = "Dimarts";
      break;
    case 3:
      dia = "Dimecres";
      break;
    case 4:
      dia = "Dijous";
      break;
    case 5:
      dia = "Divendres";
      break;
    case 6:
      dia = "Dissabte";
      break;
    case 7:
      dia = "Divendres";
      break;
    default:
      alert ("El dia ha d'estar entre 1 i 7!!!"); 
  }

    return dia; 

}