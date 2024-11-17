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
      const attendedClasses = this.attendance.filter(value => value === true).length;
      return totalClasses ? attendedClasses / totalClasses : 0;
    }
  });

  this.summary = function() {
    const avgGrade = this.averageGrade;
    const avgAttendance = this.averageAttendance;

    if (avgGrade > 90 && avgAttendance >= 1) {
      return "Молодець!";
    } else if (avgGrade > 90 || avgAttendance >= 0.6) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  };
}

const student1 = new Student("Іван", "Петренко", 2000);
const student2 = new Student("Марія", "Іванова", 2001);
const student3 = new Student("Олег", "Сидоренко", 1999);

student1.grades = [95, 87, 92];
student2.grades = [85, 78, 88];
student3.grades = [70, 75, 65];

student1.present();
student1.present();
student1.present();

student2.present();
student2.absent();
student2.present();

student3.present();
student3.absent();
student3.absent();

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
