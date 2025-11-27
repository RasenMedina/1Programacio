"use strict";

mostrarMenu();

function mostrarMenu() {
	let opcio;

	do {
		/*
		console.log("===== MENÚ PRINCIPAL =====");
		console.log("1. Dia de Partit");
		console.log("2. Comprovar Rookies");
		console.log("3. Ordenar rookies");
		console.log("4. Mostrar el titular");
		console.log("0. Sortir");
		console.log("==========================");
		*/

		opcio = prompt("Introdueix una opció:\n1. Dia de Partit\n2. Comprovar Rookies\n3. Ordenar rookies\n4. Mostrar el titular\n0. Sortir");
		opcio = parseInt(opcio.trim().charAt(0));

		// TODO: Cridar la funció adequada depenent de l'opció triada 
		
		if (isNan(opcio)){
			alert("Opcio d'entrada no vàlida, has d' entrar un número");
			return;
		}

		switch (opcio){
			case 1:
				diaDePartit();
				break;
			case 2: 
				comprovarRookies();
				break;
			case 3: 
				ordenarRookies();
				break;
			case 4:
				mostrarTitular();
				break;
			case 0:
				alert("Sortida del programa");
				break;
			default: 
				alert("No reconec aquesta opció");
		}

	} while (opcio !== "0");
}

function diaDePartit() {
	// TODO: demanar els noms dels dos equips i les puntuacions
	let equip1=prompt("Nom de l'equip 1:").trim().toUpperCase();
	let equip2=prompt("Nom de l'equip 2:").trim().toUpperCase();
	let puntsEquip1=parseInt(prompt("Inrodueix el marcador dels "+equip1).trim());
	let puntsEquip2=parseInt(prompt("Inrodueix el marcador dels "+equip2).trim());
	if (isNan(puntsEquip1) || isNan(puntsEquip2)){
		alert("Error, has d'introduir 2 números");
		return;
	}
	let guanyador = (puntsEquip1>puntsEquip2)?equip1:equip2;
	alert(guanyador+ " ha guanyat el partit");
}

function comprovarRookies() {
	// TODO: demanar minuts, punts i assistències del rookie
	// i mostrar la valoració
	let minRookie=parseInt(prompt("Introdueix els minuts per partit del rookie: ").trim());
	let puntsRookie=parseInt(prompt("Introdueix els punts per partit del rookie: ").trim());
	let assistRookie=parseInt(prompt("Introdueix les assistències per partit del rookie: ").trim());
	if (isNan(minRookie) || puntsRookie || isNaN(assistRookie)){
		alert("Error, algun dels 3 camps introduïts no és un número");
		return;
	}
	let missatge;
	if (minRookie>=5){
		missatge="Valoració del rookie:\n";
		if(puntsRookie>=10 & assistRookie>=5) missatge += "Rookie estrella";
		else missatge += "Rookie promesa";
	}
	else missatge="Aquest rookie no es valorará";
	alert(missatge);
}

function ordenarRookies() {
	// TODO: demanar les puntuacions del 3 rookies
	// i mostrar-les ordenades
	let puntsR1=parseFloat(prompt("Introdueix la valoració del primer rookie").trim().replace(",","."));
	let puntsR2=parseFloat(prompt("Introdueix la valoració del segon rookie").trim().replace(",","."));
	let puntsR3=parseFloat(prompt("Introdueix la valoració del tercer rookie").trim().replace(",","."));

	if (isNan(puntsR1) || isNan(puntsR2) || isNaN(puntsR3)){
		alert("Error, alguna de les 3 puntuacions no és un nombre");
		return;
	}

	else if (puntsR1 >= puntsR2 && puntsR1>=puntsR3){
		if (puntsR2 >= puntsR3) alert("R1:" + puntsR1 + " R2:" + puntsR2 + " R3: " + puntsR3);
		else alert("R1:" + puntsR1 + " R3:" + puntsR3 + " R2: " + puntsR2)
	}
	else if(puntsR2 >= puntsR1 && puntsR2>=puntsR3){
		if (puntsR1 >= puntsR3) alert("R2:" + puntsR2 + " R1:" + puntsR1 + " R3: " + puntsR3);
		else alert("R2:" + puntsR2 + " R3:" + puntsR3 + " R1: " + puntsR1)
	}
	else{ //if(puntsR3 >= puntsR1 && puntsR3>=puntsR1)
		if (puntsR1 >= puntsR2) alert("R3:" + puntsR3 + " R1:" + puntsR1 + " R2: " + puntsR2);
		else alert("R3:" + puntsR3 + " R2:" + puntsR2 + " R1: " + puntsR1)
	}

}

function mostrarTitular() {
	// TODO: extreure i mostrar el titular a partir de la notícia
	let noticia = prompt("Introdueix una notícia").trim();
	let equip1 = prompt("Introdueix el nom del primer equip").trim();
	let equip2 = prompt("Introdueix el nom del segon equip").trim();
	let titular=noticia.substring(noticia.indexOf(equip1),(noticia.indexOf(equip2)+equip2.length));
	let missatge = "Titular:\n";
	missatge += titular;
	alert(missatge);
}

