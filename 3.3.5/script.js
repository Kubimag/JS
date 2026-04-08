let podmínka = !false;
podmínka = true && false;
podmínka = true || false

console.log(podmínka)

// Podmínka před if

let number = 10;
let message;

if (number > 0) {
    message = "Kladné číslo"
} else {
    message = "Nekladné číslo"
}

console.log(message)

// Druhé řešení pomocí ternárního operátoru

let number2 = 10;
let message2 = (number2 > 0) ? "Kladné číslo" : "Nekladné číslo";

console.log(message2)