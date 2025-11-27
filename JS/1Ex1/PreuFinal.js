"use strict";

//Fes un programa que, a partir del preu d'un article, calculi el preu final aplicant un descompte d'un 15% i un IVA del 21%.

const IVA = 21;
let preu = 123.45;
let preuDTE = preu - preu * 15 / 100;              // DTE (15) és un literal
let preuIVA = preuDTE + preuDTE * IVA / 100;        // IVA és una constant
alert(preu);
alert(preuDTE);
alert(preuIVA);


let missatge = "El preu inicial era "+ preu + " €";
missatge += "\nEl preu amb dte és " + preuDTE + " €";
missatge += "\nEl preu amb IVA és " + preuIVA + " €";
alert(missatge);



