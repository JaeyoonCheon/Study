var Person = (function () {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHi = function () {
    console.log(`Hi, ${this.name}`);
  };
  Person.sayHello = function () {
    console.log("Hello");
  };
  return Person;
})();

const person = new Person();

Person.sayHello();
