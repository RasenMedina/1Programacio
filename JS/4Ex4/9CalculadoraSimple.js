"use strict";

// Inputs per introduir els dos números
const iNum1 = document.getElementById("n1");
const iNum2 = document.getElementById("n2");
// Botó per executar l'aplicació
const bExec1 = document.getElementById("exec1");
const bExec2 = document.getElementById("exec2");
const bExec3 = document.getElementById("exec3");
const bExec4 = document.getElementById("exec4");
// Element on mostrar el resultat
const terminal = document.getElementById("terminal");

// Quan es fa clic en el botó 'exec' es crida la funció 'executar()'
bExec1.addEventListener("click", executar1);
bExec2.addEventListener("click", executar2);
bExec3.addEventListener("click", executar3);
bExec4.addEventListener("click", executar4);

// Funció que executa l'aplicació
function executar1() { //suma
    // Obtenir els 'inputs' del document i guardar-los en variables
    let num1 = iNum1.value;
    let num2 = iNum2.value;
    
    // Adaptar i processar les dades
    num1= parseFloat(num1.replace(",","."));
    num2= parseFloat(num2.replace(",","."));

    // Processar les dades
    let resultat = num1+num2;

    // Mostrar dades
    terminal.innerHTML = "El resultat és " + resultat;
}
function executar2() { //resta
    // Obtenir els 'inputs' del document i guardar-los en variables
    let num1 = iNum1.value;
    let num2 = iNum2.value;

    // Adaptar i processar les dades
    num1= parseFloat(num1.replace(",","."));
    num2= parseFloat(num2.replace(",","."));

    // Processar les dades
    let resultat = num1-num2;

    // Mostrar dades
    terminal.innerHTML = "El resultat és " + resultat;
}
function executar3() { //multiplicació
    // Obtenir els 'inputs' del document i guardar-los en variables
    let num1 = iNum1.value;
    let num2 = iNum2.value;
    
    // Adaptar i processar les dades
    num1= parseFloat(num1.replace(",","."));
    num2= parseFloat(num2.replace(",","."));

    // Processar les dades
    let resultat = num1*num2;

    // Mostrar dades
    terminal.innerHTML = "El resultat és " + resultat;
}
function executar4() { //divisió
    // Obtenir els 'inputs' del document i guardar-los en variables
    let num1 = iNum1.value;
    let num2 = iNum2.value;
    
    // Adaptar i processar les dades
    num1= parseFloat(num1.replace(",","."));
    num2= parseFloat(num2.replace(",","."));

    // Processar les dades
    let resultat = num1/num2;

    // Mostrar dades
    terminal.innerHTML = "El resultat és " + resultat;
}