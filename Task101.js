const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    location: 'some place',

    personInfo: function() {
        return `Ім'я: ${this.firstName} Прізвище: ${this.lastName}, Вік: ${this.age}, Місце проживання: ${this.location}`;
    }
};
console.log(person.personInfo());