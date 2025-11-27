"use strict";

// Inputs per introduir el nom i l'edat
const iNum1 = document.getElementById("n1");
const iNum2 = document.getElementById("n2");
// Botó per executar l'aplicació
const bExec = document.getElementById("exec");
// Element on mostrar el resultat
const terminal = document.getElementById("terminal");

// Quan es fa clic en el botó 'exec' es crida la funció 'executar()'
bExec.addEventListener("click", executar);

// Funció que executa l'aplicació
function executar() {
    // Obtenir els 'inputs' del document i guardar-los en variables
    let num1 = iNum1.value;
    let num2 = iNum2.value;


    // Processar les dades
    
    
    if (num1 > 0){                       
        terminal.innerHTML = "El número és positiu";
    } else if (num1 < 0){                                    
        terminal.innerHTML = "El número és negatiu";
    } else {
        terminal.innerHTML = "El número és 0";
    }

    

    // Mostrar el resultat
    //terminal.innerHTML = "Rasen guapo";
    //terminal.innerHTML += "<br> El preu de Dte és: " + preu; 

    
}