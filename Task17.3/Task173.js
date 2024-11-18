class BankAccount {
constructor(initialBalance) {
    this.balance = initialBalance;
}
getBalance() {
    return this.balance;
}
deposit(amount) {
    if (amount > 0) {
        this.balance += amount;
    } else {
    console.log("Сума депозиту має бути позитивною");
        }
    }
withdraw(amount) {
    if (amount > this.balance) {
        console.log("Недостатньо коштів");
    } else if (amount <= 0) {
        console.log("Сума виведення має бути позитивною");
    } else {
        this.balance -= amount;
        }
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300