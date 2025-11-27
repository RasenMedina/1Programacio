"use strict";
alert("Rasen programador pro");

/*
Fes un programa que, introduïnt un número N entre entre 1 i 80, escrigui una línia amb N asteriscos.
*/
let resposta=parseInt(prompt("Introdueix un número N entre 1 i 80").trim());

let missatge="";
while (isNaN(resposta) || resposta<1 || resposta>80){
    alert("Ha de ser un número entre 1 i 80");
    resposta=parseInt(prompt("Introdueix un número N entre 1 i 80").trim());
}

for(let i=0;i<resposta;i++){
   missatge += "*";
}
 console.log(missatge);
