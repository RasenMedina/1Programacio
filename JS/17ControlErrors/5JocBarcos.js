/*
Dissenyem el joc dels barcos
*/

"use strict";

try{
  let jugador1 = prompt("Introdueix 'pedra', 'paper' o 'tisores'(# per acabar)");
  if(jugador1 == null){
    throw new Error ("El valor del jugador 1 no pot ser NULL");
  }
  jugador1 = jugador1.trim().toLocaleUpperCase();
  while (jugador1 != "#") {
    if (!(esPedraPaperTisores(jugador1))){
      throw new Error ("Ha de ser 'pedra', 'paper' o 'tisores'");
    }
    try {
      let jugador2 = prompt("Introdueix 'pedra', 'paper' o 'tisores'(# per acabar)");
        if(jugador1 == null){
          throw new Error ("El valor del jugador 2 no pot ser NULL");
        }
      if (!(esPedraPaperTisores(jugador2))){
        throw new Error ("Ha de ser 'pedra', 'paper' o 'tisores'");
      }
      jugador2 = jugador2.trim().toLocaleUpperCase();
      JocPedraPaperTisores(jugador1, jugador2);
      jugador1 = prompt("Introdueix 'pedra', 'paper' o 'tisores'(# per acabar)").trim().toUpperCase();
    } 
    catch (error) {
      alert("Error 2: " + error.message);
    }
  }
}
catch (e){
  alert("Error 1: " + e.message);
}
alert("Programa finalitzat");
