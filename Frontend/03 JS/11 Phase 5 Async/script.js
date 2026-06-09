console.log('************* Normal synchronous code');
console.log('Hello 1');
console.log('Hello 2');
console.log('Hello 3');

// console.log('************ Async Code');
// console.log('start');
// setTimeout( function(){
//     console.log('SetTimeout (Delay function)');
// },2000)
// console.log('end');

console.log('************** API Calling demo');
let response = fetch ('https://jsonplaceholder.typicode.com/todos/1')
console.log(response);

console.log('********************** Set timeout/set interval');
var stop = setInterval(function (){
                console.log('Interval');
            },1000)
setTimeout(function(){
    clearInterval(stop)  // this will help to stop the interval at certain time
},5000)


