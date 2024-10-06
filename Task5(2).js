    // курс долара до гривні
const exchangeRate = 26;

for (let dollars = 10; dollars <=100; dollars +=10) {
    const result = dollars * exchangeRate;
    console.log(`${dollars} доларів = ${result} гривень`);
}