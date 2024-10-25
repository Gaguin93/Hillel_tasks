const numbers = [23, 11, 42, 75, 62, 14, 81, 98, 33, 12];
function check(numbers) {
    return numbers % 2===0;
}
const checkEven = numbers.filter(check); 
console.log(checkEven);