// console.log('**************** Example 1 ');
// async function dataLao() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(response);
// }
// dataLao()

// console.log('********************** Example 2');
// async function dataLao() {
//     const response = await fetch('https://picsum.photos/v2/list')
//     const data = await response.json()
//     console.log(data);
// }
// dataLao()

// console.log('***************** Promise for sync task');
// let p1 = new Promise(function (resolve,reject) {
//     let val = true;
//     if(val){
//         console.log('success');
//     }else{
//         console.log('Fail');
//     }
// })

// console.log('************** Promise by using resolve/reject and then/catch/finally');
// let p1 = new Promise (function (resolve, reject) {
//     console.log('Promise pending hai');
//     let result = false
//     setTimeout(function(){
//         if(result){
//         console.log('Value true');
//         resolve()
//     }else{
//         console.log('Value false');
//         reject()
//     }
//     },2000)
// })
// p1.then(function(){
//     console.log('promise is fulfilled');
// })
// .catch(function(){
//     console.log('promise is rejected');
// })
// .finally(function(){
//     console.log('promise end');
// })

// console.log('******** Order food by using promises');
// function orderFood () {
//     let myOrder = new Promise(function(resolve,reject){
//         console.log('Your order is comming');
//         let orderStatus = true
//         setTimeout(function (){
//             if(orderStatus){
//                 console.log('Deleviary wale bhaiya aa gaye hai');
//                 resolve()
//             }else{
//                 console.log('Order failed');
//                 reject
//             }
//         },2000)
//     }).then(function(){
//         console.log('Now make a payment');
//             setTimeout(function(){
//             console.log('payment processing');
//             let status = false
//             if(status){
//                 console.log('Payment done');
//                 console.log('Yay Nacho');
//             }else{
//                 console.log('payment failed');
//                 console.log('please retry');
//             }
//         },2000)
//     }).catch(function() {
//         console.log('complain karo  ');
//     }).finally(function () {
//         console.log('process end');
//     })
// }
// orderFood()

// console.log('************** Fetch api');
// const response = fetch('https://fakestoreapi.com/products')
// response.then(function () {
//     console.log('Data aa gaya');
// }).catch(function () {
//     console.log('Data nhi aaya');
// })


// ***************************** self Practice 

// console.log('************ Fetch api by using async and await');
// async function dataLao(){
//     const response = await fetch('https://fakestoreapi.com/products')
//     const data = await response.json()
//     data.forEach((e) => {
//         console.log(e);
//         console.log(e.id);
//         console.log(e.title);
//         console.log(e.price);
//     })
// }
// dataLao()

// var status = new Promise((resolve,reject) =>{
//     let work = false
//     if(work){
//         console.log('kam chal raha hai ');
//         resolve()
//     }else{
//         console.log('kam me problem aa gaya hai');
//         reject()
//     }
// }).then(()=> {
//     console.log('Done');
// }).catch(() => {
//     console.log('Failed');
// })

var result = new Promise((res,rej) => {
    let num = 6
    if(num<5 && num>=0){
        console.log('chl gya');
        res()
    }else{
        console.log('ruk gya');
        rej()
    }
}).then(() => {
    console.log('kaam done');
}).catch(() => {
    console.log('fail ho gaya');
})





