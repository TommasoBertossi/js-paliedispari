let oddOrEven = prompt("Scegli: pari o dispari?", "pari");
let chooseNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

function random() {
    let randomNumber = Math.floor(Math.random() * 4 + 1);

    return random;
}

let sum = chooseNumber + random();

function isOddOrEven(number) {
    let result;
    if (number % 2 == 0) {
        result = ("pari")
    } else {
        result = ("dispari")
    }

    return isOddOrEven;
}

isOddOrEven(sum);

if (result == oddOrEven) {
    document.getElementById(numero).innerHTML = ("Hai vinto")
} else {
    document.getElementById(numero).innerHTML = ("Hai vinto")
}