// 'use strict'

// This
console.log(window);
console.log(this);
const obj = {
    user: 'Mantu',
    greet: () => {
        console.log(this);
    }
}
obj.greet()

// "use strict"
// a = 10
// console.log(window); // by using stict mode it throw error(because variable is not defined) but without using strict mode it doesn't throw error

// when you 'use strict' whith this is thorw undefined 
function check() {
    console.log(this);
}
check()

// normal function me lexical context pura object hota hai jabki arrow funciton me koi bhi lexical context nhi hota hai so it returns window
var obj1 = {
    firstName: 'Bipin',
    lastName: 'Rajput',
    age: 22,
    getIntro: function () {
        console.log(this.firstName ,'', this.lastName ); // here only this can print the body of object
    }
}
obj1.getIntro()

// arrow funtion with this 
var obj2 = {
    firstName: 'Rahut',
    lastName: 'Rajput',
    age: 35,
    getIntro: () => {
        console.log(this); // here this can print the whole window because it has no lexical context
    }
}
obj2.getIntro()

// function nested arrow function
var nestedMethod = {
    city: 'Patna',
    roll: 34,
    college: function () {
        console.log('this is college function');
        function nest() {
            console.log('this is the nested function');
            console.log(this);
        }
        nest()
    }
}
nestedMethod.college()
//
const obj3 = {
    name: 'Mantu',
    age: 20,
    company: {
        name: 'sheryians',
        course: 'cohort',
        duration: 2,
        getName:  function() {
            console.log(this.name);
        }
    }
} 
obj3.company.getName()
//
const obj4 = {
    name: 'Mantu',
    age: 20,
    getName: function () {
        const companyName = {
            name: 'sheryians',
            isGood: true,
            greet: () => {  // if you chage this to ananyoms function then it will return sheryians
                console.log(this.name);
            }
        }
        companyName.greet()
    }
} 
obj4.getName()
//
const stu1 = {
    firstName: 'Mantu',
    lastName: 'Tiwari',
    getName: function() {
        console.log(this.firstName+''+this.lastName);
    }
}
stu1.getName()

// call, Apply, Bind (function sharing)
let student1 = {
    firstName: 'Rahul',
    lastName: 'Gupta',
    maths: 88,
    science: 97,
    sst: 67,
}
let student2 = {
    firstName: 'kartik',
    lastName: 'sharma',
    maths: 98,
    science: 77,
    sst: 89,
}
let student3 = {
    firstName: 'Mayank',
    lastName: 'Tiwari',
    maths: 79,
    science: 83,
    sst: 90,
}
const getMarks = function (city, state) {
    console.log(`${this.firstName} ${this.lastName}, You got ${(this.maths+this.science+this.sst)/3}% and he is from ${city} (${state})`);
}
getMarks.call(student3,'Patna','BR') //here we use call to use other function to another function
getMarks.apply(student2,['Mumbai','MH']) // apply me bas ham array me argument ko pass karte hai
var out = getMarks.bind(student1,'Patna','BR')
out() // bind is similar to call but the only difference is that it store into the variable
// function me agar argument pass hoga to wo calll me comma se seprated hoga

// ************************* Prototype
const arr = [10,20,30,40]
console.log(arr); // console pe arr print hoga
console.log(arr.__proto__); // prototype show hoga in the form of array
console.log(arr.__proto__.__proto__); // prototype show hoga in the form of object
console.log(arr.__proto__.__proto__.__proto__); // last point null show karega
console.log('individual prototype');
console.log(Array.prototype);
console.log(Object.prototype);
console.log(Function.prototype);
console.log(Object.prototype === Array.prototype.__proto__);
console.log(Object.prototype === Function.prototype.__proto__);
console.log(Object.prototype.__proto__ === Function.prototype.__proto__.__proto__);
console.log(Object.prototype.__proto__);

// prototypical inheritance
const company = {
    name: 'Sheryians',
    foundYear: 2022,
    slogan: function() {
        console.log('We teach what Matters');
    }
}
const user = {
    name : 'Mantu',
    age: 22,
}
user.__proto__ = company // don't do this because this will change the default prototype to assigned prototype which make the performance issue
console.log(user);
console.log(user.foundYear); // it inherit the property of company object 

// *************************************** Self practice

console.log('Self practice');
console.log('Global this'); /* ************************** */
console.log(this); // window

console.log('function me this' ); /* ************************** */
function show() {
    console.log(this); //window
}
show()

console.log('arrow function me this' ); /* ************************** */
const sho = () => {
    console.log(this); //window
}
sho()

console.log('Method me this normal function');/* ************************** */
const u = {
    name: 'Rahul',
    greet() {
        console.log(this.name); // rahul
    },
    // greet: function() {
    //     console.log(this.name); // rahul
    // }
}
u.greet()

console.log('Method me this arrow function');/* ************************** */
const u1 = {
    name: 'Rahul',
    greet: () => {
        console.log(this.name); // unidentified
    }
}
u1.greet()

console.log('example 2 Method me this arrow function'); /* ************************** */
const u2 = {
    name: 'Rohan',
    hobby: ['Chess', 'Football'],
    chal() {
        this.hobby.forEach( (e) => {
            console.log(`${this.name} plays ${e}`);
        })
    }
}
u2.chal()

console.log("prototype concept");/* ************************** */
console.log(Object.prototype == u2.__proto__);
console.log(Object.prototype == u2.chal.__proto__.__proto__);
console.log(Function.prototype == u2.chal.__proto__);
console.log(Array.prototype.prototype == Function.prototype.prototype);
console.log(Array.__proto__ == Function.__proto__);

const a = [10,20,30,40]
console.log(a);

console.log('assigning prototype'); /* ************************** */
const animal = {
    name: 'Janwar',
    eats: true,
    walk(){
        console.log("Animal chal raha hai");
    }
}
var dog = {
    food: 'Omnivorus',
    sound: 'Bark',
    isPet: true,
}
dog.__proto__ = animal  // isme dog me animal ke proto ko access kar payenge
dog.walk()
// animal.__proto__ = dog // isme animal me dog ke object ko acces kar payenge
// console.log(animal.food); 
// dog = Object.create(animal)
// console.log(dog.eats);



