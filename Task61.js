function removeChars(str, charsToRemove) {
    let result = str.split('').filter(char => !charsToRemove.includes(char));
    return result.join('');
}

    //Приклад використання:

    const inputStr = "hello world";
    const charsToRemove = ['l', 'd'];
    const result = removeChars(inputStr, charsToRemove);
    console.log(result);