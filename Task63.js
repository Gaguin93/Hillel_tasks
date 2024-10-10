function removeElement(array, item) {
    return array.filter(element => element !== item);
}

const array = [2, 5, 7, 9, 11, 24, 11, 65];
const newArray = removeElement(array, 11);
console.log(newArray);