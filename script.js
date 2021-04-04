
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