"use strict";
alert("Rasen programador pro");

/*
Fes un programa com l'anterior però que escrigui una línia amb 1 asterisc, una amb 2 asteriscos... fins arribar a una línia amb N asteriscos.
*/


let resposta=parseInt(prompt("Quants asteriscs vols (1-100)").trim());
let missatge="";

while (isNaN(resposta) || resposta<1 || resposta>80){
    alert("Ha de ser un número entre 1 i 100");
    resposta=parseInt(prompt("Quants asteriscs vols (1-100)").trim());
}

for(let i=0;i<resposta;i++){
   for(let j=0;j<=i;j++){
     missatge += "*";
   }
   missatge += "\n";
   
}
 console.log(missatge);
