"use strict";
alert("Rasen programador pro");

/*
Utilitza bucles for niuats per mostrar les taules de multiplicar en el següent format:
*/

//Preguntem i comprovem el valor 1

let missatge = "";
let valor;

for (let i=1;i<=10;i++){
  for (let j=1;j<=10;j++){
    valor = i*j;
    missatge += valor;
    if (valor.toString().length == 3) missatge += " ";
    else if (valor.toString().length == 2) missatge += "  ";
    else missatge += "   ";
  }
  missatge += "\n";
}

console.log(missatge);






