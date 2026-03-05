// console.log('Lets start with OOP');

const person = {
    name: ["Іван", "Петренко"],
    age: 32,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} має ${this.age} років.`);
    },
    introduceSelf() {
      console.log(`Привіт! Я — ${this.name[0]}.`);
    },
  };
  
  const person1 = {
    name: "Христина",
    introduceSelf() {
      console.log(`Привіт! Я — ${this.name}.`);
    },
  };

  const person2 = {
    name: "Дмитро",
    introduceSelf() {
      console.log(`Привіт! Я — ${this.name}.`);
    },
  };
  // DRY code - do not repeat yourself

  // Функція - конструктор
  function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Привіт! Я — ${this.name}.`);
    };
    return obj;
  };

  function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Привіт! Я — ${this.name}.`);
    };
  }

  const myObject = {
    city: "Харків",
    greet() {
      console.log(`Привіт із ${this.city}!`);
    },
  };

//   const myDate = new Date();
//   let object = myDate;

//   check the whole chain of prototypes:
//   do {
//     object = Object.getPrototypeOf(object);
//     console.log(object);
//   } while (object);

const myDate = new Date(1995, 11, 17);

myDate.getTime = function () {
    console.log("Something else")
}

const personPrototype = {
    greet() {
      console.log(`Привіт, моє ім'я — ${this.name}!`);
    },
  };

  function Person(name) {
    this.name = name;
  }

  Object.assign(Person.prototype, personPrototype);

  const reuben = new Person("Рубен");

//   do {
//     object = Object.getPrototypeOf(reuben);
//     console.log(reuben);
//   } while (reuben);

function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
    // НЕ визначаємо тут методи!
  }
  
  // Метод на прототипі — лише одна копія для всіх екземплярів:
  PersonConstructor.prototype.greet = function () {
    console.log(`Привіт, я — ${this.name}`);
  };
  
  const person3 = new PersonConstructor("Аліса", 25);
  const person4 = new PersonConstructor("Богдан", 30);
  
  //person3.greet(); // Привіт, я — Аліса
  //person4.greet(); // Привіт, я — Богдан
  
  // Вони використовують ОДНУ функцію з прототипу:
  //console.log(person3.__proto__.greet === person4.__proto__.greet); // true
  

  // Псевдокод ієрархії:
// Person       — має: name, introduceSelf()
// Professor    — успадковує Person + teaches, grade()
// Student      — успадковує Person + year


class Animal {
    speak() {
      console.log("Якийсь звук тварини");
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log("Гав!");
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log("Няв!");
    }
  }
  
  const animals = [new Animal(), new Dog(), new Cat()];
  
//   animals.forEach(animal => animal.speak());
  // Якийсь звук тварини
  // Гав!
  // Няв!
  
  /*
  // ПОГАНО — інший код знає внутрішні деталі:
if (student.year > 1) {
  // дозволити відвідувати секцію
}

// ДОБРЕ — логіка прихована:
class Student {
  canStudyArchery() {
    return this.year > 1;
  }
}

if (student.canStudyArchery()) {
  // дозволити відвідувати секцію
}

*/

class Car {
    startEngine() {
      this.#prepareEngine(); // виклик приватного методу
      console.log("Двигун запущено.");
    }
  
    // Приватний метод — схований від зовнішнього світу:
    #prepareEngine() {
      console.log("Виконується підготовка двигуна...");
    }
  }
  
  const myCar = new Car();
//   myCar.startEngine();
  // Виконується підготовка двигуна...
  // Двигун запущено.
  
  // myCar.#prepareEngine(); // Помилка! Метод приватний.
  

  // КЛАСИ У JAVASCRIPT