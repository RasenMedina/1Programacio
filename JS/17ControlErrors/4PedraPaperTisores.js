/*
Dissenyem el joc de pedra paper tisores
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

function esPedraPaperTisores(paraula){ //retorna true en cas que sigui pedra, paper o tisores, fals altrament
  return (paraula=="PEDRA" || paraula=="PAPER" || paraula=="TISORES")
}

function JocPedraPaperTisores (jugador1, jugador2){ //mostra el guanyador del joc pedra paper tisores
  let message = jugador1 + " vs " + jugador2 + ":\n"; 
  if (jugador1 == "PEDRA"){
    if (jugador2 == "PEDRA"){
      message += "Empat perquè la pedra no pot guanyar a la pedra";
    }
    else if (jugador2 == "PAPER"){
      message += "El jugador 2 guanya perquè el paper guanya a la pedra";
    }
    else{ //jugador2 == "TISORES"
      message += "El jugador 1 guanya perquè la pedra guanya a les tisores";
    } 
  }
  else if (jugador1 == "PAPER"){
    if (jugador2 == "PEDRA"){
      message += "El jugador 1 guanya perquè el paper guanya a la pedra";
    }
    else if (jugador2 == "PAPER"){
      message += "Empat perquè el paper no pot guanyar al paper";
    }
    else{ //jugador2 == "TISORES"
      message += "El jugador 2 guanya perquè les tisores guanyen al paper";
    } 
  }
  else{ //jugador1 == "TISORES"
    if (jugador2 == "PEDRA"){
      message += "El jugador 2 guanya perquè la pedra guanya a les tisores";
    }
    else if (jugador2 == "PAPER"){
      message += "El jugador 1 guanya perquè les tisores guanyen al paper";
    }
    else{ //jugador2 == "TISORES"
      message += "Empat perquè les tisores no poden guanyar a les tisores";
    } 
  }
  alert(message);
}