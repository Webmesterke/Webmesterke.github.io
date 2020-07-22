let datum = new Date();

let nap = datum.getDay();

function getDateAkcio() {
    switch (nap) {
        case 1:
            napNeve = "Hétfő";
            break;
        case 2:
            napNeve = "Kedd";
            break;
        case 3:
            napNeve = "Szerda";
            break;
        case 4:
            napNeve = "Csütörtök";
            break;
        case 5:
            napNeve = "Péntek";
            break;
        case 6:
            napNeve = "Szombat";
            break;
        case 0:
            napNeve = "Vasárnap";
            break;
    }
    napPizza();
}

function napPizza() {
    let napPizzaSpan = document.querySelectorAll(".napNeve");
    let napNeveAkcio = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];

    for (let i = 0; i < napPizzaSpan.length; i++) {
        if (napNeve == napNeveAkcio[i]) {
            napPizzaSpan[i].style.color = "red";
            break;
        }
    }
}