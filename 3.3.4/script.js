// Vnořené podmínky
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    console.log("Vítej na stránce!")
    if (isAdmin) {
        console.log("Přístup do panelu admin povolen.")
    } else {
        console.log("Přístup jako uživatel povolen.")
    }
}

// Operátory

let age = 20;
let hasDriverLicense = false;

if (age >= 18 && hasDriverLicense) {
    console.log("Může řídit");
}  else {
        console.log("Nemůže řídit")
    }

let isHoliday = false;
let isWeekend = true;

if (isHoliday || isWeekend) {
    console.log("Je čas relaxovat!")
}  else {
    console.log("Je čas fárat.")
}