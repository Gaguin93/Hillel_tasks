    // Запитуємо інформацію у користувача 

let birthYear = prompt("Введіть свій рік народження:");
let city = prompt("В якому місті Ви живите?");
let sport = prompt("Ваш улюблений вид спорту?");

    // Перевіряємо, чи користувач ввів всі дані

if (!birthYear) {
    alert("Шкода, що Ви Голова не захотіли ввести свій рік народження.");
} else if (!city) {
    alert("Шкода, що Ви Голова не захотіли ввести своє місто.");
} else if (!sport) {
    alert("Шкода, що Ви Голова не захотіли ввести свій улюблений вид спорту.");
}

    // Рахуємо вік

let age = new Date().getFullYear() - birthYear;

    // Повідомлення про місто

let cityMessage;
switch(city.toLowerCase()) {
    case "київ":
        cityMessage = "Ти живеш у столиці України!";
        break;
    case "торсгавн":
        cityMessage = "Ти живеш у столиці Фарерськіх островів!";
        break;
    case "лонг'їр":
        cityMessage = "Ти живеш у столиці Шпіцбергена!";
        break;
    default:
        cityMessage = `Ти живеш у місті ${city}.`;
}

    // Повідомляємо про спорт

let sportMessage;
switch (sport.toLowerCase()) {
    case "шахи":
        sportMessage = "Круто! Хочеш стати Магнусом Карлсеном?";
        break;
    case "боротьба":
        sportMessage = "Круто! Хочеш стати Хабібіком?";
        break;
    case "армрестлінг":
        sportMessage = "Круто! Хочеш стати Девоном Ларратом?";
        break;
    default:
        sportMessage = `Твій улюблений вид спорту: ${sport}.`;
}

    // Формуємо фінальне повідомлення

let message = `Твій вік: ${age} років.\n${cityMessage}\n${sportMessage}`;

    // Показуємо повідомлення в одному вікні

alert(message);
