function calc() {

    const california = 120;
    const capri = 130;
    const digomix = 140;
    const botticelli = 130;
    const gusto = 140;
    const stefano = 150;
    const etna = 160;
    const maffia = 170;


    let pizzaselect = document.querySelector("#pizza");
    let pizza = pizzaselect.options[pizzaselect.selectedIndex].value;
    let pizzameret = parseInt(document.querySelector('input[name="pizzameret"]:checked').value);
    let pizzadb = parseInt(document.querySelector("form#rendeles input[name=pizza-db]").value);

    const pepsi = 800;
    const fanta = 600;
    const lipton = 400;

    let pepsidb = parseInt(document.querySelector("form#rendeles input[name=pepsi-db]").value);
    let fantadb = parseInt(document.querySelector("form#rendeles input[name=fanta-db]").value);
    let liptondb = parseInt(document.querySelector("form#rendeles input[name=lipton-db]").value);

    let osszeg = document.querySelector("strong");

    let pepsiosszeg;
    let fantaosszeg;
    let liptonosszeg;
    let pizzaosszeg;
    let fizetendo;

    if (pizza == "california") {
        pizzaosszeg = california * pizzameret * pizzadb;
    } else if (pizza == "capri") {
        pizzaosszeg = capri * pizzameret * pizzadb;
    } else if (pizza == "digomix") {
        pizzaosszeg = digomix * pizzameret * pizzadb;
    } else if (pizza == "botticelli") {
        pizzaosszeg = botticelli * pizzameret * pizzadb;
    } else if (pizza == "gusto") {
        pizzaosszeg = gusto * pizzameret * pizzadb;
    } else if (pizza == "stefano") {
        pizzaosszeg = stefano * pizzameret * pizzadb;
    } else if (pizza == "etna") {
        pizzaosszeg = etna * pizzameret * pizzadb;
    } else if (pizza == "maffia") {
        pizzaosszeg = maffia * pizzameret * pizzadb;
    } else {
        alert("Válassz egy pizzát!");
    }

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

    fizetendo = pizzaosszeg + pepsiosszeg + fantaosszeg + liptonosszeg;

    osszeg.innerHTML = fizetendo.toLocaleString('hu-HU');

}