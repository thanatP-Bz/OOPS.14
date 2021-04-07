/* 
    const Person = function (firstName, birthYear, age) {
      this.firstName = firstName;
      this.birthYear = birthYear;
      this.age = age;  
};
///construction function use Capital letter and cannot use arrow function

const thanat = new Person('Benz', 1992, 28);
const jimmy = new Person('jimmy', 1993, 34);
console.log(thanat, jimmy);

///console.log(thanat instanceof Person);

//Prototypes
console.log(Person.prototype);
Person.prototype.calAge = function() {
      console.log(2037 - this.birthYear);
};

Person.prototype.calYear = function() {
      console.log(2021 - this.birthYear);
};

thanat.calYear();
jimmy.calAge();

console.log(thanat.__proto__);

console.log(Person.prototype.isPrototypeOf(thanat));
Person.prototype.gem = 'ruby';
console.log(thanat.gem);

console.log(thanat.hasOwnProperty('firstName'));

//coding chellege 1
const Car = function (make, speed) {
      this.make = make;
      this.speed = speed;
};

Car.prototype.accelerate = function() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new Car('bmw', 120);
const honda = new Car('honda', 95);

bmw.accelerate();
bmw.brake();
 */
///
/* const Diet = function(personName, cal, workout) {
      this.personName = personName;
      this.cal = cal;
      this.workout = workout;
};

Diet.prototype.result = function() {
    const final = this.cal - this.workout;
    console.log(`${this.personName} calories result is ${final}`);
}

const Jane = new Diet('Jane',2400, 1500);
const James = new Diet('James',3000, 1000);

Jane.result();
James.result();

///
const CalHeight = function(customer, height) {
      this.customer = customer;
      this.height = height;
};

CalHeight.prototype.deHeight = function() {
      this.height /=  3;
      console.log(`${this.customer} is age ${this.height}`);
}

const Bree = new CalHeight('Bree', 178);
const Mandy = new CalHeight('Mandy', 180);

Bree.deHeight(); */

//classes ES6
class PersonInfo {
      constructor(fullName, birthYear) {
            this.fullName = fullName;
            this.birthYear = birthYear;
      }
  //Method will be add to .prototype proproty
      calAge() {
           this.birthYear = 2021 - this.birthYear;
           console.log(`${this.fristName} is ${this.birthYear} years old`);
      }

      greet() {
            console.log(`Hi ${this.fristName}`);
      }

      get age() {
            return 2021 - this.birthYear;
            
      }

      set fullName(name) {
            if (name.includes(' ')) this._fullName = name;
      else alert (`${name} not a fullname`);
      }

      get _fullName() {
            return this._fullName;
      }
};

const benz = new PersonInfo('Thanat Benz', 1992);
console.log(benz.age);
benz.calAge();
benz.greet();



class FootBallTeam {
      constructor (name, est) {
            this.name = name;
            this.est = est;
      }
      
      establish() {
            this.est = 2021 - this.est;
            console.log(`${this.name} is established for ${this.est} years`)
      };

};

const liverpool = new FootBallTeam('Liverpool', 1892);
liverpool.establish();

/* personInfo.prototype.greet = function() {
      console.log(`Hello ${this.fristName}`);
};
 */
// 1.classes are NOT hoisted
// 2.classes are first-class citizen
// 3.classes are excuted in strict mode

//getters and setters

const accountPerson = {
      owner: 'Alen',
      partner: [],
      movements: [200, 300, 500, 800],
      birthYear: 1992,

      get first() {
            return this.movements.slice(0).shift();
      },

      set second(name) {
            this.partner.push(name);
      },

      set add(num) {
            this.movements.push(num);
      },

      get age() {
            return 2021 - this.birthYear;
      }
};

console.log(accountPerson.first);

accountPerson.second = 'Mike';
console.log(accountPerson.partner);

accountPerson.add = 350;
console.log(accountPerson.movements);

console.log(accountPerson.age);