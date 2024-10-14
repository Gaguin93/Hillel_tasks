function askNumber(validate) {
    let userInput = null;
    let attempts = 0;

    while (attempts < 10) {
        userInput = prompt("Введіть число більше 100:");

        if (userInput === null) {
            console.log("Користувач скасував введення.");
            return;
        }

        userInput = Number(userInput);
    

    if (validate(userInput)) {
        console.log(`Ви ввели правильне число: ${userInput}`);
        return;
    }

    attempts++;
}

console.log(`Максимальна кількість спроб досягнута. Останнє введене значення: ${userInput}`)
}

function isGreaterThan100(num) {
    return num > 100;
}

askNumber(isGreaterThan100);