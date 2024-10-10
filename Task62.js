function averageOfNumbers(arr) {

    // Фільтрація масива, залишає лише числові значення

    const numbers = arr.filter(item => typeof item === 'number');

    // Якщо немає чисел в масиві, повертаємо 0, за для уникнення помилки

    if (numbers.length === 0) {
        return 0;
    }

    // Обчислюємо суму чисел

    const sum = numbers.reduce((acc, num) => acc + num, 0);

    // Обчислюємо середнє арифметичне

    return sum / numbers.length;
}

    // Приклад:

    const mixedArray = [3, 'Ocean', 'Lamp', 7, null, 'Journey', 11, 'Whisper', true, 'Puzzle', 27];
    const average = averageOfNumbers(mixedArray);
    console.log(average);

