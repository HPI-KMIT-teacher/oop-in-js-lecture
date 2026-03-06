// Псевдокод ієрархії:
// Person       — має: name, introduceSelf()
// Professor    — успадковує Person + teaches, grade()
// Student      — успадковує Person + year


// Повна ієрархія: Person, Professor, Student
// Базовий клас
class Person {
    name;
  
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Мене звати ${this.name}.`);
    }
}

// Підклас: Викладач
class Professor extends Person {
    teaches;
  
    constructor(name, teaches) {
      super(name);
      this.teaches = teaches;
    }
  
    introduceSelf() {
      console.log(
        `Мене звати Професор ${this.name}, і я викладаю ${this.teaches}.`
      );
    }
  
    grade(paper) {
      const grade = Math.floor(Math.random() * (5 - 1) + 1);
      console.log(`Оцінка за роботу "${paper}": ${grade}`);
    }
  }

  // Підклас: Студент
class Student extends Person {
    year;
  
    constructor(name, year) {
      super(name);
      this.year = year;
    }
  
    introduceSelf() {
      console.log(`Мене звати ${this.name}, я навчаюся на ${this.year} курсі.`);
    }
  }

  // --- Демонстрація ---
const pratt = new Person("Пратт");
pratt.introduceSelf();     // Мене звати Пратт.

const walsh = new Professor("Волш", "Психологія");
walsh.introduceSelf();     // Мене звати Професор Волш, і я викладаю Психологія.

const summers = new Student("Саммерс", 2);
summers.introduceSelf();   // Мене звати Саммерс, я навчаюся на 2 курсі.