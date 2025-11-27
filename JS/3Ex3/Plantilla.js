"use strict";

// Inputs per introduir el nom i l'edat
const iNom = document.getElementById("nom");
const iEdat = document.getElementById("edat");
// Botó per executar l'aplicació
const bExec = document.getElementById("exec");
// Element on mostrar el resultat
const terminal = document.getElementById("terminal");

// Quan es fa clic en el botó 'exec' es crida la funció 'executar()'
bExec.addEventListener("click", executar);

// Funció que executa l'aplicació
function executar() {
    // Obtenir els 'inputs' del document i guardar-los en variables
    let nom = iNom.value;
    let edat = iEdat.value;

    // Processar les dades
    nom = nom.trim().toUpperCase();
    edat = parseInt(edat);

    // Mostrar el resultat
    alert ("La frase és: " + frase);
    alert ("\nLa paraula és: " + paraula);
    terminal.innerHTML = "Hola " + nom + " tens " + edat + " anys";
}