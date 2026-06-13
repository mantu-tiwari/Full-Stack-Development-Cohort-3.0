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

// console.log('************** API Calling demo');
// let response = fetch ('https://jsonplaceholder.typicode.com/todos/1')
// console.log(response);

// console.log('********************** Set timeout/set interval');
// var stop = setInterval(function (){
//                 console.log('Interval');
//             },1000)
// setTimeout(function(){
//     clearInterval(stop)  // this will help to stop the interval at certain time
// },5000)


// ************************** Self Practice
// function greet (user, city){
//     console.log(`I am ${user} from ${city}`);
// }
// setTimeout(greet,1000,'Mantu', 'Patna') 

// function dataLao(callback) {
//     console.log('server se data la raha hoo');
//     // jaise hi data mil jaye timeout chala do
//     setTimeout(() => {
//         let data = {id:1, user: 'Mantu'}
//         callback(data)
//     }, 2000);
// }
// const result = (d) => {
//     console.log('data mil gaya ',d);
// }
// dataLao(result)

// // this is the callback method (oldest way)
// function dataLao(cb) {
//     console.log('Data lane gaya hai');
//     setTimeout(() => {
//         let err = null
//         let data = {id:1, user: 'Kartik'}
//         if (err){
//             cb(err,null)
//         }else{
//             cb(null,data)
//         }
//     }, 1000);
// }
// const result = (err,data) => {
//     if(err){
//         console.log('Error aaya ', err);
//         return
//     }
//     console.log('success', data);
    
// }
// dataLao(result)

// // same problem with the promises (new method)
// function dataLao() {
//     console.log('data lane gaya hai');
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let err = null
//             let data = {id:1, user: 'Kartik'}
//             if(err){
//                 reject('error aaya hai '+ err)
//             }else{
//                 resolve(data)
//             }
//         },1000)
//     }).then((data) => {
//         console.log('success', data);
//     }).catch((err) => {
//         console.log('failed ',err);
//     })
// }
// dataLao()

// // same problem with the async/await (newest method)
// function dataLao() {
//     console.log('data lane gaya hai');
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let err = null
//             let data = {id:1, user: 'Kartik'}
//             if(err){
//                 reject('error aaya hai '+ err)
//             }else{
//                 resolve(data)
//             }
//         },1000)
//     })
// }
// async function run() {
//     try{
//         const data = await dataLao()
//         console.log('success', data);
//     }catch(err){
//         console.log('failed',err);
//     }
// }
// run()

// lighter version of async await 
function dataLao(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject('server down')
        },1000)
    })
}
async function main (){
    try {
        const data = await dataLao()
        console.log('success', data);
    }catch(err){
        console.log('failed', err);
    }finally{
        console.log('task end');
    }
}
main()