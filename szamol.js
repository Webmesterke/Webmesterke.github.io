//Mai dátum

//document.querySelector("#today").addEventListener("change", getDate);

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

let osszeg = document.querySelector("strong");

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
    let pizzaAr = document.querySelector(".pizza-osszeg");
    let pizzaMeret = parseInt(document.querySelector('input[name="pizzameret"]:checked').value);
    let pizzaDb = parseInt(document.querySelector("form#rendeles input[name=pizza-db]").value);
    let pizzaOsszeg = 0;
    let pizzaKedvezmeny = document.querySelector(".pizza-kedvezmeny");

    if (document.querySelector('#pizza').value != "choose") {
        document.querySelector("#calc-btn").style.display = "none";
        if (pizzaMeret == 22) {
            for (let i = 0; i < pizzaTipusok.length; i++) {
                if (pizzaNev == pizzaTipusok[i]) {
                    if (pizzaDb >= 5) {
                        pizzaOsszeg = pizzaAr.innerHTML = pizzaArak22[i] * pizzaDb;
                        pizzaKedvezmeny.innerHTML = "-" + parseInt(pizzaArak22[i]).toLocaleString('hu-HU');
                    } else {
                        pizzaOsszeg = pizzaAr.innerHTML = pizzaArak22[i] * pizzaDb;
                        pizzaKedvezmeny.innerHTML = 0;
                        break;
                    }
                }
            }
        } else if (pizzaMeret == 32) {
            for (let i = 0; i < pizzaTipusok.length; i++) {
                if (napPizza == pizzaTipusok[i]) {
                    pizzaOsszeg = (pizzaArak32[i] * 0.9) * pizzaDb;
                    pizzaAr.innerHTML = parseInt(pizzaOsszeg);
                } else if (pizzaNev == pizzaTipusok[i]) {
                    pizzaOsszeg = pizzaArak32[i] * pizzaDb;
                    pizzaAr.innerHTML = parseInt(pizzaOsszeg);
                    break;
                }
            }
        } else if (pizzaMeret == 42) {
            for (let i = 0; i < pizzaTipusok.length; i++) {
                if (pizzaNev == pizzaTipusok[i]) {
                    if (pizzaDb >= 3) {
                        pizzaOsszeg = pizzaAr.innerHTML = pizzaArak42[i] * pizzaDb;
                        pizzaKedvezmeny.innerHTML = "-" + parseInt(pizzaArak42[i]).toLocaleString('hu-HU');
                    } else {
                        pizzaOsszeg = pizzaAr.innerHTML = pizzaArak42[i] * pizzaDb;
                        pizzaKedvezmeny.innerHTML = 0;
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

    let fizetendo = pizzaOsszeg + italOsszeg;

    osszeg.innerHTML = fizetendo.toLocaleString('hu-HU');

    let ajandek = document.querySelector(".ajandek");

    if (fizetendo > 10000 && fizetendo <= 20000) {
        ajandek.innerHTML = '+ ajándék:<br /><img src="images/zoldtea2.png" class="ital-h">'
            //ajandek.innerHTML = "Ajándékba adunk 0,5 l Lipton zöldteát!"
    } else if (fizetendo > 20000 && fizetendo <= 30000) {
        ajandek.innerHTML = '+ ajándék:<br /><img src="images/zoldtea2.png" class="ital-h"> <img src="images/fanta2.jpg" class="ital-h">'
            //ajandek.innerHTML = "Ajándékba adunk 0,5 l Lipton zöldteát és 0,5 l Fantát!"
    } else if (fizetendo > 30000) {
        ajandek.innerHTML = '+ ajándék:<br /><img src="images/zoldtea2.png" class="ital-h"> <img src="images/fanta2.jpg" class="ital-h"> <img src="images/pepsi2.jpg" class="ital-h">'
            //ajandek.innerHTML = "Ajándékba adunk 0,5 l Lipton zöldteát, 0,5 l Fantát és 0,5 l Pepsit!"
    } else {
        ajandek.innerHTML = "";
    }
}

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