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
    let edat = iNum1.value;
    let num2 = iNum2.value;


    // Processar les dades
    
    
    if (edat>=18 && edat<80){                       
        terminal.innerHTML = "Pots conduir un cotxe";
    } 
    if (edat>=67 && edat<=16){                       
        terminal.innerHTML = "No estàs en edat de treballar";
    } 
        if (edat<3){                       
        terminal.innerHTML = "Has d' anar a la guarderia";
    } 
        if (edat>=18 && edat<=24){                       
        terminal.innerHTML = "Pots estudiar un CFGS";
    } 
    

    // Mostrar el resultat
    //terminal.innerHTML = "Rasen guapo";
    //terminal.innerHTML += "<br> El preu de Dte és: " + preu; 

    
}