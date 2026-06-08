// *************************************** The this Keyword

// ## Problem 1: Global vs Function `this` Create a function `showThis()` and print the value of `this` when:
// // - Called in strict mode 
// 'use strict' 
// function showThisStrict() {
//     console.log(this);
// }
// showThisStrict()
// // - Called normally
// function showThis(){
//     console.log(this);
// }
// showThis()

// Problem 2: Object Method Context
const user = {
  name: "Anubhav",
  call(){
    console.log('hello ' + this.name);
  }
};
user.call() 

// Problem 3: Arrow Function vs Regular Function
const obj1 = {
    name: 'Rahul',
    normal() {
        console.log('normal function');
        console.log(this.name);
    }
}
obj1.normal()
const obj2 = {
    name: 'Rahul',
    arrow: () => {
        console.log('arrow function');
        console.log(this.name); // it throw undefined
    }
}
obj2.arrow()

// Problem 4: Nested Callback Problem // doubt solved in notes phase 4
const hoby = {
    name: "Rahul",
    hobbies: ["Coding", "Gaming", "Reading"],
    call(){
        this.hobbies.forEach((e) => {
            console.log(`${this.name} likes ${e}`);
        })
    }
}
hoby.call()

// Problem 5: Event Handler Simulation


// ************************************ call(), apply(), bind()

// Problem 6: Borrow a Method using call()
const person1 = {
    name: "Anubhav" ,
    intro() {
        console.log(`Hi, I am ${this.name}`);
    }
};
const person2 = {
    name: "Rahul" 
};
person1.intro()
person1.intro.call(person2)

// Problem 7: apply() with Array Arguments
function place(city,country) {
    console.log(`Hi I am ${this.name} from ${city}, ${country}`);
}
place.apply(person1, ['Indore', 'India'])
place.apply(person2, ['San Fransisco', 'USA'])

// Problem 8: bind() for Delayed Execution
const person3 = {
    name: 'Sarthak',
    age: 23,
}
function printName() {
    console.log(this.name);
}
setTimeout(printName.bind(person3) , 2000);

// Problem 9: Custom Calculator
const value = {
    val: 100
}
function add(a,b) {
    console.log(this.val+a+b);
}
add.call(value,10,20)
add.apply(value,[30,40])
const bindAdd = add.bind(value,30,60)
bindAdd()


// ************************************** Prototypes

// Problem 10: Prototype Lookup
const person = {
  name: "Rahul"
};
// console.log(person.hasOwnProperty("name") == person.__proto__);
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("toString"));

// Problem 11: Create a Custom Prototype Method
const arr = [10,20,30,40]
Array.prototype.sum = function () {
    let total = 0
    for (let i=0; i<this.length; i++){
        total += this[i]
    }
    return total
}
console.log(arr.sum());

// Problem 12: Object.create()
const animal = {
    eat(){
        console.log('Animal is eating');
    },
    sleep(){
        console.log('Animal is sleeping');
    }
}
const dog = Object.create(animal)
dog.bark = true
console.log(dog.bark);
dog.eat()
dog.sleep()

// Problem 13: Prototype Inheritance
const vehicle = {
    name: 'Gaddi',
    start() {
        console.log(this.name,'Start');
    },
    stop(){
        console.log(this.name,'Stop');
    },
}
let car = Object.create(vehicle)
let bike = Object.create(vehicle)
let truck = Object.create(vehicle)
// car.__proto__ = vehicle  //old methods
// bike.__proto__ = vehicle
// truck.__proto__ = vehicle
car.start()

// Problem 14: Constructor Function + Prototype     

// Problem 15: Prototype Chain Investigation
const ar = [11,22,33,44,55]
console.log(ar.__proto__); // it show array prototype
console.log(ar.__proto__.__proto__); // it show object prototype
console.log(ar.__proto__.__proto__.__proto__); // it show null
// reson array/funtion prototype < object prototype (higher) < null
