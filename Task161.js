function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);

    Object.defineProperty(this, 'age', {
        get() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.birthYear;
        }
    });

    Object.defineProperty(this, 'averageGrade', {
        get() {
            if (this.grades.length === 0) return 0;
            const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
            return sum / this.grades.length;
        }
    });

    this.present = function() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        }
    };

    this.absent = function() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        }
    };

    Object.defineProperty(this, 'averageAttendance', {
        get() {
            const totalClasses = this.attendance.filter(value => value !== null).length;
            if (totalClasses === 0) return 0;
            const attendedClasses = this.attendance.filter(value => value === true).length;
            return attendedClasses / totalClasses;
        }
    });

    this.summary = function() {
        const avgGrade = this.averageGrade;
        const avgAttendance = this.averageAttendance;

        if (avgGrade >= 90 && avgAttendance >= 0.9) {
            return "Молодець!";
        } else if (avgGrade >= 80 || avgAttendance >= 0.8) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    };
}

const student1 = new Student("Maya", "Rodriguez", 1988);
student1.grades = [95, 91, 92];
student1.attendance = [true, true, true, true, true, true, true, true, true];

const student2 = new Student("Ravi", "Patel", 1993);
student2.grades = [84, 76, 88];
student2.attendance = [true, false, true, true, false, true, true];

const student3 = new Student("Lena", "Castillo", 1999);
student3.grades = [60, 65, 70];
student3.attendance = [false, false, true, false, false, true];

console.log(`Студент 1: ${student1.firstName} ${student1.lastName}`);
console.log(`Вік: ${student1.age}`);
console.log(`Середня оцінка: ${student1.averageGrade}`);
console.log(`Середня відвідуваність: ${student1.averageAttendance}`);
console.log(`Результат: ${student1.summary()}`);

console.log(`\nСтудент 2: ${student2.firstName} ${student2.lastName}`);
console.log(`Вік: ${student2.age}`);
console.log(`Середня оцінка: ${student2.averageGrade}`);
console.log(`Середня відвідуваність: ${student2.averageAttendance}`);
console.log(`Результат: ${student2.summary()}`);

console.log(`\nСтудент 3: ${student3.firstName} ${student3.lastName}`);
console.log(`Вік: ${student3.age}`);
console.log(`Середня оцінка: ${student3.averageGrade}`);
console.log(`Середня відвідуваність: ${student3.averageAttendance}`);
console.log(`Результат: ${student3.summary()}`);
