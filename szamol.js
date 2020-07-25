//NO CLEAN CODE!!!
//Mai dátum
let napPizza = "";

function getDate() {
    datum = new Date();

    let nap = datum.getDay();
    switch (nap) {
        case 1:
            napNeve = "Hétfő";
            napPizza = "california";
            break;
        case 2:
            napNeve = "Kedd";
            napPizza = "capri";
            break;
        case 3:
            napNeve = "Szerda";
            napPizza = "digomix";
            break;
        case 4:
            napNeve = "Csütörtök";
            napPizza = "botticelli";
            break;
        case 5:
            napNeve = "Péntek";
            napPizza = "gusto";
            break;
        case 6:
            napNeve = "Szombat";
            napPizza = "stefano";
            break;
        case 0:
            napNeve = "Vasárnap";
            napPizza = "etna";
            break;
    }
    document.querySelector("#napNeve").innerHTML = napNeve;
    document.querySelector("#napPizza").innerHTML = napPizza;
}
//Select
document.querySelector("#pizza").addEventListener("change", calc);

let osszegTotal = document.querySelector("strong");

//Pizza összeg:
function calc() {
    let pizzaTipusok = [
        "paradicsomos", "tejfolos", "chilis",
        "california", "capri", "digomix",
        "botticelli", "gusto", "stefano",
        "etna", "maffia"
    ];
    let pizzaArak22 = [
        1500, 1700, 1900,
        2000, 2200, 2400,
        2200, 2400, 2600,
        2300, 2500
    ];
    let pizzaArak32 = [
        2000, 2200, 2400,
        2500, 2700, 2900,
        2700, 2900, 3100,
        2800, 3000
    ];
    let pizzaArak42 = [
        2500, 2700, 2900,
        3000, 3200, 3400,
        3200, 3400, 3600,
        3300, 3500
    ];

    let pizzaSelect = document.querySelector("#pizza");
    let pizzaNev = pizzaSelect.options[pizzaSelect.selectedIndex].value;
    let pizzaMeret = parseInt(document.querySelector('input[name="pizzameret"]:checked').value);
    let pizzaDb = parseInt(document.querySelector("form#rendeles input[name=pizza-db]").value);
    let pizzaAr = document.querySelector(".pizza-osszeg");
    let pizzaOsszeg = 0;
    let pizzaKedvezmeny = document.querySelector(".pizza-kedvezmeny");
    let napiKedvezmeny = document.querySelector(".napi-kedvezmeny");
    napiKedvezmeny.innerHTML = "";
    let kedvezmeny = 0;

    if (document.querySelector('#pizza').value != "choose") {
        document.querySelector("#calc-btn").style.display = "none";
        if (pizzaMeret == 22) {
            for (let i = 0; i < pizzaTipusok.length; i++) {
                if (pizzaNev == pizzaTipusok[i]) {
                    if (pizzaDb >= 5) {
                        pizzaOsszeg = pizzaAr.innerHTML = pizzaArak22[i] * pizzaDb;
                        pizzaKedvezmeny.innerHTML = kedvezmeny = pizzaArak22[i] * -1;
                    } else {
                        pizzaOsszeg = pizzaAr.innerHTML = pizzaArak22[i] * pizzaDb;
                        pizzaKedvezmeny.innerHTML = kedvezmeny = 0;
                        break;
                    }
                }
            }
        } else if (pizzaMeret == 32 && pizzaDb < 4) {
            for (let i = 0; i < pizzaTipusok.length; i++) {
                if (napPizza == pizzaTipusok[i]) {
                    pizzaOsszeg = pizzaAr.innerHTML = pizzaArak32[i] * pizzaDb * 0.9;
                    napiKedvezmeny.innerHTML = "Napi árkedvezmény: 10%!";
                    pizzaKedvezmeny.innerHTML = kedvezmeny = 0;
                } else if (pizzaNev == pizzaTipusok[i]) {
                    pizzaOsszeg = pizzaAr.innerHTML = pizzaArak32[i] * pizzaDb;
                    pizzaKedvezmeny.innerHTML = kedvezmeny = 0;
                    break;
                }
            }
        } else if (pizzaMeret == 32 && pizzaDb >= 4) {
            for (let i = 0; i < pizzaTipusok.length; i++) {
                if (napPizza == pizzaTipusok[i]) {
                    pizzaOsszeg = pizzaAr.innerHTML = pizzaArak32[i] * pizzaDb * 0.9;
                    napiKedvezmeny.innerHTML = "Napi árkedvezmény: 10%!";
                    pizzaKedvezmeny.innerHTML = kedvezmeny = pizzaArak32[i] * 0.9 * -1;
                } else if (pizzaNev == pizzaTipusok[i]) {
                    pizzaOsszeg = pizzaAr.innerHTML = pizzaArak32[i] * pizzaDb;
                    pizzaKedvezmeny.innerHTML = kedvezmeny = pizzaArak32[i] * -1;
                    break;
                }
            }
        } else if (pizzaMeret == 42) {
            for (let i = 0; i < pizzaTipusok.length; i++) {
                if (pizzaNev == pizzaTipusok[i]) {
                    if (pizzaDb >= 3) {
                        pizzaOsszeg = pizzaAr.innerHTML = pizzaArak42[i] * pizzaDb;
                        pizzaKedvezmeny.innerHTML = kedvezmeny = pizzaArak42[i] * -1;
                    } else {
                        pizzaOsszeg = pizzaAr.innerHTML = pizzaArak42[i] * pizzaDb;
                        pizzaKedvezmeny.innerHTML = kedvezmeny = 0;
                        break;
                    }
                }
            }
        }
    } else {
        alert("Válassz egy pizzát!");
    }

    let osszegPizza = document.querySelector(".pizza-osszeg");
    osszegPizza.innerHTML = pizzaOsszeg.toLocaleString('hu-HU');
    let osszegKedvezmeny = document.querySelector(".pizza-kedvezmeny");
    osszegKedvezmeny.innerHTML = kedvezmeny.toLocaleString('hu-HU');

    //Ital összeg:
    const pepsi = 800;
    const fanta = 600;
    const lipton = 400;

    let pepsidb = parseInt(document.querySelector("form#rendeles input[name=pepsi-db]").value);
    let fantadb = parseInt(document.querySelector("form#rendeles input[name=fanta-db]").value);
    let liptondb = parseInt(document.querySelector("form#rendeles input[name=lipton-db]").value);

    let pepsiosszeg;
    let fantaosszeg;
    let liptonosszeg;

    let italOsszeg = 0;

    if (pepsidb > 0) {
        pepsiosszeg = pepsi * pepsidb;
    } else {
        pepsiosszeg = 0;
    }

    if (fantadb > 0) {
        fantaosszeg = fanta * fantadb;
    } else {
        fantaosszeg = 0;
    }

    if (liptondb > 0) {
        liptonosszeg = lipton * liptondb;
    } else {
        liptonosszeg = 0;
    }

    let osszegItal = document.querySelector(".ital-osszeg");

    italOsszeg = pepsiosszeg + fantaosszeg + liptonosszeg;

    osszegItal.innerHTML = italOsszeg.toLocaleString('hu-HU');

    //Végösszeg:
    let fizetendo = pizzaOsszeg + italOsszeg + kedvezmeny;

    osszegTotal.innerHTML = fizetendo.toLocaleString('hu-HU');

    //Ajándék italok:    
    let ajandek = document.querySelector(".ajandek");

    if (fizetendo > 10000 && fizetendo <= 20000) {
        ajandek.innerHTML = '+ ajándék:<br /><img src="images/zoldtea3.png">'
            //ajandek.innerHTML = "Ajándékba adunk 0,5 l Lipton zöldteát!"
    } else if (fizetendo > 20000 && fizetendo <= 30000) {
        ajandek.innerHTML = '+ ajándék:<br /><img src="images/zoldtea3.png"> <img src="images/fanta3.png">'
            //ajandek.innerHTML = "Ajándékba adunk 0,5 l Lipton zöldteát és 0,5 l Fantát!"
    } else if (fizetendo > 30000) {
        ajandek.innerHTML = '+ ajándék:<br /><img src="images/zoldtea3.png"> <img src="images/fanta3.png"> <img src="images/pepsi3.png">'
            //ajandek.innerHTML = "Ajándékba adunk 0,5 l Lipton zöldteát, 0,5 l Fantát és 0,5 l Pepsit!"
    } else {
        ajandek.innerHTML = "";
    }
}

//Megrendelői adatok ellenőrzése:
let neve = document.querySelector("#neve");
let cime = document.querySelector("#cime");
let telefon = document.querySelector("#telefon");

function valid() {
    if (neve.value == "") {
        alert("Név megadása kötelező");
        neve.value = "";
        neve.focus();
    } else if (cime.value == "") {
        alert("Cím megadása kötelező");
        cime.value = "";
        cime.focus();
    } else if (telefon.value == "") {
        alert("Telefonszám megadása kötelező");
        telefon.value = "";
        telefon.focus();
    } else {
        order();
    }
}

function order() {
    if (osszeg.innerHTML == "0") {
        alert("Válassz egy terméket!");
    } else {
        alert("Köszönjük a vásárlást!");
    }
}