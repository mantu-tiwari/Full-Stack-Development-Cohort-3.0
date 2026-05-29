// function walk() {
//     console.log('Walking....');
// }
// function sing() {
//     console.log('Singing....');
// }
// function dance() {
//     console.log('Dancing.....');
// }
// function add(a,b) { // here (a,b) is called parameter
//     console.log('the sum is ', a+b);
// }
// function multiply(a,b) {
//     console.log('The product is ', a*b);
// }
// dance()
// sing()
// walk()
// add(4,6) // here (4,6) is called argument
// multiply(5,6)
// add('mantu', 'tiwari')
// multiply('hello','world')

// // Club Entry funciton
// function greet(user, age){
//     if (user === Number(user) || age === String(age) && (age>0) || (age<0)){
//         console.log('Invalid Input');
//     }else{
//         console.log('Good Morning....', user);
//         if (age>18){
//         console.log('You are Welcome in Party');
//         }else{
//         console.log('Not Allowed');
//         }
//     }
// }
// greet('Mantu',22)
// greet('Rahul', 12)
// greet(34,34)
// greet(43, 'Kavya')
// greet('Nitikesh', 'Roman')

// // ************************************ TYPES OF FUNCTION

// // funciton decleration (hoisting possible)
// function a1() {
//     console.log('funciton decleraton ');
// }
// // function expression (hoisting not possible)
// var b1 = function () {
//     console.log('functon expression');
// }
// // arrow function (Multiple line function) (hoisting not possible)
// var c1 = () =>{
//     console.log('arrow funciton');
// }
// // arrow function (one line function)(hoisting not possible)
// var c2 = () => console.log('arrow funciton used for one line');
// // another way of one line function if we have only one paremete
// var c3 = a => console.log('arrow funciton used for one line',a);
// a1()
// b1()
// c1()
// c2()
// c3(34789)

// // IIFE (Immediately invoked function expression)
// // function with no name is called anonymous function
// (function (){
//     console.log('IIFE ');
// })()
// // another form of iife (arrow function format)
// (()=> console.log('this is iife function '))()

// function add(a,b){
//     var c = a+b
//     return c
// }
// console.log(add(3,5));
// console.log(add(54,75));

// function permission(gen) {
//     if(gen == 'F'){
//         return "Welcome to female party"
//     }else{
//         return 'welcome to men party'
//     }
// }
// console.log(permission('M'));

// function a (){
//     return 10
// }
// var b = function (){
//     return 20
// }
// var c = () => {
//     return 30
// }
// console.log(a())
// console.log(b())
// console.log(c())

// // Impure function (return different output for same input)
// var a = 10
// function impure(num) {
//     a++
//     return a * num
// }
// console.log(impure(5));
// console.log(impure(5));

// // Pure Function (return same output for same input)
// var b = 10
// function pure(n) {
//     return b*n    
// }
// console.log(pure(10));
// console.log(pure(10));

function abc(a,b) {
    console.log('hello' , a,b);
}
abc(10,20,30)
function abc(a,b) {
    console.log('hello' , a,b);
}
abc(10)

// Default paramete in function 
function def(user = 'Mantu', age = 22) {
    console.log(`Good Morning ${user}. Your age is ${age}`);
}
def('rahul',28)
def('Sohan')
def(undefined,29) // if you want to pass only second parameter

// callback function
function main(a) {
    console.log('This is the main function');
    a()
}
function hero() {
    console.log('This is hero');
}
main(hero)

// another example of callback
function footpath(w) {
    console.log('This is footpath width width', w);    
}
function mainRoad(wid, cb) {
    console.log('This is main road whose width is :', wid);
    cb(wid/10)
}
mainRoad(80,footpath)

// Missing topic done after revision
// here function ke andar function hai to inner function lock hota hai usko access karne ka process is code me hai
function parent1() {
    console.log('this is Parent');
    function child1() {
        console.log('this is child');
    }
    return child1
}
parent1()()

// nesting fumction
function dada() {
    console.log('I am dada');
    function papa() {
        console.log('I am papa');
        function bacha() {
            console.log('I am bacha');
        }
        return bacha
    }
    return papa
}
dada()()()
