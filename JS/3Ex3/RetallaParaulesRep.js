"use strict";

// Inputs per introduir el nom i l'edat
const iFrase = document.getElementById("frase");
const iParaula = document.getElementById("paraula");
// Botó per executar l'aplicació
const bExec = document.getElementById("exec");
// Element on mostrar el resultat
const terminal = document.getElementById("terminal");

// Quan es fa clic en el botó 'exec' es crida la funció 'executar()'
bExec.addEventListener("click", executar);

// Funció que executa l'aplicació
function executar() {
    // Obtenir els 'inputs' del document i guardar-los en variables
    let frase = iFrase.value;
    let paraula = iParaula.value;

    // Processar les dades
    let iPrimRepIn = frase.indexOf(paraula); //índex principi primera paraula repetida
    let iUltRepFin = frase.lastIndexOf(paraula) + paraula.length; //índex final segona paraula repetida
    let iPrimRepFin = frase.indexOf(paraula) + paraula.length; //índex final primera paraula repetida
    let iUltRepIn = frase.lastIndexOf(paraula); //índex principi segona paraula repetida

    // Mostrar el resultat
    terminal.innerHTML += "Rasen guapo";
    terminal.innerHTML += "<br> Frase: " + frase; //mostra frase introduida
    terminal.innerHTML += "<br> Paraula: " + paraula; //mostra paraula introduida 
    terminal.innerHTML += "<br> El text entre les dues paraules incloses: " + frase.substring(iPrimRepIn, iUltRepFin); 
    terminal.innerHTML += "<br> El text entre les dues paraules sense incloure: " + frase.substring(iPrimRepFin, iUltRepIn);
    
}