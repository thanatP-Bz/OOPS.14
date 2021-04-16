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
/* class PersonInfo {
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
            console.log(name);
            if (name.includes(' ')) this._fullName = name;
            else alert(`${name} is not a full name`);
      }

      get fullName() {
            return this._fullName;
      }

      static hi() {
            console.log('Hey there');
            console.log(this);
      }
};

const benz = new PersonInfo('Thanat Benz', 1992);
console.log(benz.age);
benz.calAge();
benz.greet();


PersonInfo.hi();

///////////////object.create
const PersonProto = {
      calAge() {
            this.birthYear = 2021 - this.birthYear;
            console.log(`${this.fristName} is ${this.birthYear} years old`);
       }
};

const wicky = Object.create(PersonProto);
console.log(wicky);
wicky.fristName = 'Wicky';
wicky.birthYear = 1992;
wicky.calAge();

console.log(wicky.__proto__ === PersonProto) */;

/* personInfo.prototype.greet = function() {
      console.log(`Hello ${this.fristName}`);
};
 */
// 1.classes are NOT hoisted
// 2.classes are first-class citizen
// 3.classes are excuted in strict mode

//getters and setters

/* const accountPerson = {
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

      set add(mov) {
            this.movements.push(mov);
      },

      get age() {
            return 2021 - this.birthYear;
      }
};

console.log(accountPerson.first);

accountPerson.second = 'Mike';
console.log(accountPerson.partner);

accountPerson.add = 200;
console.log(accountPerson.movements);

console.log(accountPerson.age);
 */
/////////
/* class calpoints {
      constructor(name, point) {
            this.name = name;
            this.point = point;
      }

      set extra() {
            return this.point * 3;
      }
};

const colin = new calpoints('Colin', 25);
console.log(colin.extra); */

////coding challege 2
/* class Car {
      constructor (carName, speed) {
            this.speed = speed;
            this.carName = carName;
      }

      get speedUs() {
            return this.speed / 1.6;
      }///get will return value;

      set speedUs(speed) {
            this.speed = speed * 1.6;
      }
};


const carOne = new Car('Ford', 120);
console.log(carOne.speedUs);
carOne.speedUs = 50;
console.log(carOne);
 */
/////////////////////////////
/////inheritance between classes and contructor
/* 
class PersonInfo {
      constructor (firstName, birthYear) {
            this.fullName = firstName;
            this.birthYear = birthYear;
      }
      calAge() {
            this.birthYear = 2021 - this.birthYear;
            console.log(`${this.fristName} is ${this.birthYear} years old`);
       }
};

class Student {
      constructor (firstName, birthYear, course) {
            PersonInfo.call(this, firstName, birthYear);//use call method to call the function in order to not repeat yourself
            this.course = course;
      }

      geeting() {
            return `Hello everyone my name is ${this.firstName}`
      }
};

const redmond = new Student('Red', 1993, 'Sciences');
redmond.geeting(); */
/////////////////////////////

const Person = function (firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
      console.log(2021 - this.birthYear);
}

const NewStudent = function (firstName, birthYear, course) {
      Person.call(this, firstName, birthYear);
      this.course = course;
};

NewStudent.prototype = Object.create(Person.prototype); //use Object create to connect and share behaviour with the parent

NewStudent.prototype.introduce = function() {
      console.log(`hello my name is ${this.firstName}`);
};


const mike = new NewStudent('Mike', 1993, 'Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);

NewStudent.prototype.constructor = NewStudent;
console.dir(NewStudent.prototype.constructor);
///////////////////////////////////////////////
////////////coding challege 3

const Car2 = function (make, speed) {
      this.make = make;
      this.speed = speed;
};

Car2.prototype.accelerate = function () {
      this.speed += 10;
      console.log(`${this.make} is going to ${this.speed}`);
};

Car2.prototype.brake = function () {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed}`);
};

const EV = function (make, speed, charge) {
      Car2.call(this,make, speed);
      this.charge = charge;
};
//link to prototypes
EV.prototype = Object.create(Car2.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
      this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
      this.speed += 20;
      this.charge --;
      console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`);
}

const tesla = new EV ('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
