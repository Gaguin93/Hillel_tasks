let number = prompt("Введіть тризначне число:");

    // Перетворюємо число на рядок, щоб легше отримати окремі цифри

let digit1 = number[0];
let digit2 = number[1];
let digit3 = number[2];

    // Перевіряємо, чи всі цифри однакові

if (digit1 === digit2 && digit2 === digit3) {
    alert("Всі цифри однакові.");
} else {
    alert("Цифри не всі однакові.");
}

    // Перевіряємо, чи є серед цифр однакові

if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
    alert("Є однакові цифрию.");
} else {
    alert("Усі цифри різні");
}