"use strict";

// Inputs per introduir el nom i l'edat
const iAny = document.getElementById("n1");
// Botó per executar l'aplicació
const bExec = document.getElementById("exec");
// Element on mostrar el resultat
const terminal = document.getElementById("terminal");

// Quan es fa clic en el botó 'exec' es crida la funció 'executar()'
bExec.addEventListener("click", executar);

// Funció que executa l'aplicació
function executar() {
    // Obtenir els 'inputs' del document i guardar-los en variables
    let any = iAny.value;

    
    // Processar les dades
    
    if ((any%4==0) && ((any%10!=0)||(any%400==0))){                       
        terminal.innerHTML = "L' any " + any + " SÍ és de traspàs";
    } else {
        terminal.innerHTML = "L' any " + any + " NO és de traspàs";
    }

    


}