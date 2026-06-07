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