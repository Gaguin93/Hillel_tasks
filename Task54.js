const N = parseInt(prompt("Введіть ціле число "), 10);

let isPrime = true;

if (N <= 1) {
    isPrime = false;    // числа менші або рівні 1 не є простими
} else {
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            isPrime = false;    // якщо знайдено дільник, число не є простим
            break;
        }
    }
}

if (isPrime) {
    console.log(`${N} є простим числом`);
} else {
    console.log(`${N} не є простим числом`);
}