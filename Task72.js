function multiplay(a) {
    return function(b) {
        return a * b;
    };
}

console.log(multiplay(5)(2));