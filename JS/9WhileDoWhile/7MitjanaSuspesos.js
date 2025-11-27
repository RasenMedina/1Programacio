"use strict";
alert("Rasen programador pro");

/*
Fes un programa que vagi demanant notes dels alumnes entre 1 i 10.

Quan l'usuari introdueixi el 0, ha de finalitzar el bucle i mostrar quants han suspès i calcular la mitjana amb un decimal.
*/

let nota;
let nSuspesos = 0, total = 0, nNotes=1;

do{
    nota = parseInt(prompt("Introdueix una nota entre 1 i 10 (0 per acabar):"));
    if (isNaN(nota)) alert("Has d'introduir un número");
    else{
        if(nota>=1 && nota<=10){
            if (nota<5) nSuspesos++;
            total += nota;
            nNotes++;
        } 
        if(nota<0 || nota>10) alert ("El número ha d' estar entre 1 i 10"); 
    }    
} while(nota != 0) ;
    
    alert("Suspesos: " + nSuspesos);
    alert("Mitjana notes: "+ (total/nNotes).toFixed(2));



/*let nota, suspensos = 0, total = 0, numNotes = 0;

do {
    nota = parseInt(prompt("Introdueix una nota entre 1 i 10 (0 per acabar)"));

    if (nota > 0 && nota <= 10) {
        total += nota;
        ++numNotes;
        if (nota < 5) ++suspensos;
    } else {
        if (nota != 0) alert("La nota és incorrecta");
    }
} while (nota != 0);

if (numNotes > 0) {
    alert("Suspensos: " + suspensos);
    alert("Mitjana: " + total / numNotes);
} else {
    alert("No has introduït cap nota");
}
*/
