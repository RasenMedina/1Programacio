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
    let contra1 = iNum1.value;
    let contra2 = iNum2.value;
    const CONTRASENYA1 = 123; 
    const CONTRASENYA2 = "123";

    // Processar les dades
    contra1 = parseInt(contra1); //treure decimals

    if (contra1 == CONTRASENYA1) {
        terminal.innerHTML = "OK";
    } else {
        terminal.innerHTML = "ERROR";
    }

    // Contrasenya alfanumèrica
    if (contra2 == CONTRASENYA2) {
        terminal.innerHTML += "/nOK";
    } else {
        terminal.innerHTML += "/nERROR";
    }

}