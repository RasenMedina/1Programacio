/*
Rasen: Examen del bloc 1 de programació
--> Fer un programa per gestionar una plataforma de streaming
Divendres 14/11/2025
*/

"use strict";


//CONSTANTS GENÈRIQUES
const MAJUSCULES = "ABCDEFGHIJKLMNOPQRSTUVWXYZÇÑ";
const MINUSCULES = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789";


//PROGRAMA PRINCIPAL 
let contrasenya = demanarContrasenya("Introdueix una contrasenya (mínim 8 caràcters, 1 majúscula, 1 minúscula i 1 dígit)");
let opcio;
do {
    opcio = demanarOpcio("Introdueix una opció", "ABCZ");
    switch (opcio) {
        case "A":
            valoracioUsuari();
            break;
        case "B":
            buscarParaula();
            break;
        case "C":
            participarTorneig();
            break;
        default:
            alert("La opció no és vàlida");
    }
} while (opcio != "Z");
alert("programa finalitzat correctament");


// FUNCIONS

// Per llegir dades
function llegirString(text) {
    let paraula = prompt(text);
    while (paraula == null) {
        mostrarErrors("El text introduït no pot ser null");
        paraula = prompt(text);
    }
    return paraula;
}

function llegirEnterEntre(text, min, max) {
    let enter;
    if (min == 0 && max == 0) {
        do {
            enter = prompt(text);
            if (enter == null) {
                mostrarErrors("No has introduït un enter correcte!!");
            } else {
                enter = parseInt(enter);
                if (isNaN(enter)) {
                    mostrarErrors("Has d' introduir un ENTER no una lletra!!");
                }
            }
        } while (enter == null || isNaN(enter));
    } else { //(min!=0 || max!=0) Ha d' estar entre un mínim i un màxim
        while (min > max) {
            mostrarErrors("El mínim no pot ser més gran que el màxim!!")
            min = parseInt(prompt("Introdueix un nou mínim:"));
            max = parseInt(prompt("Introdueix un nou màxim:"));
        }
        do {
            enter = prompt(text);
            if (enter == null) {
                mostrarErrors("No has introduït un enter correcte!!");
            } else {
                enter = parseInt(enter);
                if (isNaN(enter)) {
                    mostrarErrors("Has d' introduir un ENTER no una lletra!!");
                } else if (enter < min || enter > max) {
                    mostrarErrors("L'enter introduït ha de ser més gran que " + min + " i més petit que " + max);
                }
            }
        } while (enter == null || isNaN(enter) || enter < min || enter > max);
    }
    return enter;
}


function demanarContrasenya(text) {
    let contrasenya;
    do {
        contrasenya = llegirString(text);
    } while (!esContrasenyaValida(contrasenya));
    return contrasenya;
}


// Per tractar i/o processar dades

function esContrasenyaValida(contrasenya) {
    let esValida = false;
    let teMajuscula = false;
    let teMinuscula = false;
    let teDigit = false;
    if (contrasenya.length >= 8) {
        for (let i = 0; i < contrasenya.length; i++) {
            let c = contrasenya.charAt(i);
            if (MAJUSCULES.includes(c)) teMajuscula = true;
            else if (MINUSCULES.includes(c)) teMinuscula = true;
            else if (DIGITS.includes(c)) teDigit = true;
            esValida = (teMajuscula && teMinuscula && teDigit);
            if (esValida) break;
        }
    }
    return esValida;
}

function demanarOpcio(text) {
    mostrarMenu();
    let opcio = llegirOpcio(text, opcions)
    while (!(opcio == "A" || opcio == "B" || opcio == "C" || opcio == "Z")) {
        mostrarErrors("L'opció no és vàlida!")
        mostrarMenu();
        opcio = llegirOpcio(text, opcions);
    }
    return (opcio);
}

function llegirOpcio(text, opcions) {
    let opcio = llegirString(text);
    while (!(opcions.includes(opcio))) {
        opcio = llegirString(text);
    }
    return opcio;
}


function valoracioUsuari() {
    let hores = llegirEnterEntre("Quantes hores setmanals et dediques a escoltar música", 0, 0);
    if (hores >= 0 && hores <= 10) alert("Casual");
    else if (hores <= 30) alert("Fan");
    else if (hores <= 60) alert("Superfan");
    else if (hores > 60) alert("Addicte");
    else alert("El nombre d'hores no pot ser negatiu");
}


function buscarParaula() {
    let lletraCanso = llegirString("Introdueix la lletra d'una cançó");
    let paraula = llegirString("Introdueix una paraula");
    let comptador = 0;
    while (lletraCanso.includes(paraula)) {
        let index = lletraCanso.indexOf(paraula);
        lletraCanso = lletraCanso.substring(index + paraula.length - 1);
        comptador++;
    }
    mostrarEnter("Les vegades que la paraula apareix a la cançó", comptador);
}

function participarTorneig() {
    const MIN = 0;
    const MAX = 99;
    let text = "Introdueix un número entre " + MIN + " i " + MAX;
    let n1 = llegirEnterEntre(text, MIN, MAX);
    let n2 = llegirEnterEntre(text, MIN, MAX);
    while (n2 == n1) {
        mostrarErrors("El segon valor no pot ser igual que el primer valor");
        n2 = llegirEnterEntre(text, MIN, MAX);
    }
    let n3 = llegirEnterEntre(text, MIN, MAX);
    while (n3 == n1 || n3 == n2) {
        mostrarErrors("El tercer valor no pot ser igual que el primer valor ni que el segon");
        n3 = llegirEnterEntre(text, MIN, MAX);
    }
    let comptador1 = 0;
    let comptador2 = 0;
    let acabar = false;
    while (!acabar) {
        let nSorteig = crearEnterRandom(MIN, MAX);
    }
    mostrarEnter("Vegades que han calgut per trobar: ", comptador1);
    mostrarEnter();
    // NO HE TINGUT TEMPS D' ACABAR :((((
}

function crearEnterRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1) + min));
}


// Per mostrar dades
function mostrarErrors(text) {
    alert("-----ERROR-----\n" + text + "!!!");
}

function mostrarMenu() {
    let m = "A - Valoració d' usuari\n";
    m += "B - Buscar paraula\n";
    m += "C - Participar en un sorteig\n";
    m += "Z - Sortir del programa";
    alert(m);
}

export function mostrarEnter(text, enter) {
    alert(text + enter);
}