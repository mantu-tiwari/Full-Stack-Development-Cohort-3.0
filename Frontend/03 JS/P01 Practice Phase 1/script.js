// // *************************************** Console & Basics

// // 1. Print "Hello JavaScript" in the console.
// console.log('Hello JavaScript');

// // 2. Print your name, age, and city using one console.log().
// console.log("Mantu Kumar Tiwari", 22, 'Patna')

// // 3. Print a warning message using console.warn().
// console.warn('This is the warning Message')

// // 4. Print an error message using console.error().
// console.error('This is the error message')

// // 5. Use console.table() to display an array of 5 numbers.
// console.table([23,54,65,29,48])


// // *************************************** Variables

// // 1. Create a variable called studentName and store your name in it.
// var studentName = 'Mantu Kumar Tiwai'

// // 2. Create a variable age and print it.
// var age = 34
// console.log(age);

// // 3. Create two variables and swap their values.
// var a = 45;
// var b = 23;
// var temp 
// temp =a
// a=b 
// b= temp
// console.log(a);
// console.log(b);

// // 4. Create a constant variable for PI and print it.
// var pi = 3.14
// console.log(pi);
// console.log(typeof(pi));

// // 5. Declare a variable without assigning a value and print it.
// var c
// console.log(c);

// // 6. Create a variable score and increase it by 10.
// var score = 13
// score += 10
// console.log(score);

// //  7. Create three variables for first name, last name, and full name.
// var firstName = 'Mantu'
// var lastName = 'Tiwari'
// var fullName = firstName + lastName
// console.log(fullName);


// // *************************************** Data Types

// // 1. Create variables of type string, number, boolean, null, and undefined.
// var str = 'Mantu'
// var num = 34
// var bool = true
// var nun = null // it show object because it is the famous bug in js
// var und

// // 2. Check the type of different variables using typeof.
// console.log(typeof(str));
// console.log(typeof(num));
// console.log(typeof(bool));
// console.log(typeof(nun));
// console.log(typeof(und));

// // 3. Store your mobile number in a variable and check its type.
// var mob = 9876543210
// console.log(typeof(mob));

// // 4. Create a variable with value null and check its type.
// var check = null
// console.log(typeof(check));

// // 5. Create a bigint number and print it.
// var bigint = 34n
// console.log(bigint);


// // *************************************** Type Conversion & Coercion

// // 1. Convert the string "50" into a number.
// var str1 = '50'
// var convert = Number(str1)
// console.log(convert);

// // 2. Convert the number 100 into a string.
// var n = 100
// var s = String(n)
// console.log(s);
// console.log(typeof(s));

// // 3. Convert "true" into a boolean.
// var str = 'true'
// var b = Boolean(str)
// console.log(b);
// console.log(typeof(b));

// // 4. Check the output of: `"5" + 2``"5" - 2` `true + 1`1. Create a variable with value `"123abc"` and convert it into a number.2. Use `parseInt()` on `"500px"`.
// var p = '5'
// var q = 2
// console.log(p+q);
// console.log(p-q);
// console.log(true + 1);

// // 5. Create a variable with value "123abc" and convert it into a number.
// var mix = '123abc'
// var name1 = Number(mix)
// console.log(name1);
// console.log(typeof(name1));

// // 6. Use parseInt() on "500px".
// var pit = console.log(parseInt('500px'));
// console.log(typeof(pit));


// // *************************************** Operators

// // 1. Add two numbers and print the result.
// var num1 = 4
// var num2 = 6
// console.log('The sum is ', (num1+num2));

// // 2. Find the remainder when 25 is divided by 4.
// console.log('The remainder is ', 25%4);

// // 3. Find the square of a number using exponent operator.
// console.log('The square of 6 is :', 6**2);

// // 4. Increment a variable using ++.
// var aa = 20
// console.log(++aa)

// // 5. Decrement a variable using -.
// var bb = 20
// bb--
// console.log(bb);

// // 6. Use += operator to increase a variable by 20.
// var cc = 10
// cc += 20
// console.log(cc);

// // 7. Compare two numbers using >, <, >=, <=.
// var x = 34
// var y = 25
// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);

// // 8. Check if two values are strictly equal using ===.
// var a = 10 
// var b = 20 
// console.log(a === b);

// // 9. Compare "10" and 10 using both == and ===.
// var c = '10'
// var d = 10
// console.log('==', c == d);
// console.log('===', c === d);

// // 10. Create two boolean variables and test &&, ||, and !.
// var t = true
// var f = false
// console.log(t && f);
// console.log(t || f);
// console.log(t | f);
// console.log(t & f);


// // *************************************** Strings

// // 1. Create a string and print its length.
// var str = 'Mantu kumar Tiwari'
// console.log('String length ', str.length);

// // 2. Convert a string into uppercase.
// var str1 = 'hello'
// console.log('Uppercase', str1.toUpperCase());

// // 3. Convert a string into lowercase.
// var str2 = 'Roman Reigns'
// console.log('lowercase', str2.toLowerCase());

// // 4. Check if a string includes the word "JavaScript".
// var str3 = 'JavaScript is a scripting Language'
// console.log(str3.includes('JavaScript'));

// // 5. Extract the word "World" from "Hello World".
// var str4 = 'Hello World'
// console.log(str4.slice(6,11));

// // 6. Replace "apple" with "mango" in a sentence.
// var fruit = 'apple'
// console.log(fruit.replace('apple', 'mango'));

// // 7. Split "HTML,CSS,JS" into an array.
// var fd = ['HTML', 'CSS', 'JS']
// console.log(fd);

// // 8. Remove extra spaces from a string.
// var str5 = 'Java Script'
// console.log(str5.replace(' ', ''));

// // 9. Repeat the word "Hi" 5 times.
// console.log('Hi'.repeat(5));

// // 10. Print the first character of a string.
// console.log('mantu'.charAt(0));

// // 11. Use template literals to print:"My name is Aman and I am 20 years old"
// var user = 'Aman'
// var age = 20
// console.log(`My name is ${user} and I am ${age} years old`);


// // *************************************** Numbers & Math

// // 1. Round 4.7 using Math.round().
// console.log(Math.round(4.7));

// // 2. Find the square root of 81.
// console.log(Math.sqrt(81));

// // 3. Find the maximum number from 10, 20, 5, 99.
// console.log(Math.max(10, 20, 5, 99));

// // 4. Generate a random number between 1 and 10.
// var rand = Math.floor(Math.random()*(10-1+1))+1; //let rand = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(rand);

// // 5. Convert "99.99" into an integer.
// console.log(Math.round(99.99));

// // 6. Check whether 25 is an integer or not.
// var num = 25
// console.log(Number.isInteger(num));

// // 7. Use toFixed(2) on 3.141592.
// var pi = 3.141592
// console.log(pi.toFixed(2)); // string
// console.log(Number(pi.toFixed(2))); // number
// console.log(typeof(pi));


// // *************************************** Conditionals

// // 1. Check whether a number is positive or negative.
// var num = -34
// if (num >= 0){
//     console.log('positive');
// }else{
//     console.log('negative');
// }

// // 2. Check whether a number is even or odd.
// var a = 38
// if (a%2 === 0){
//     console.log('Even Numabr');
// }else{
//     console.log('odd Number')
// }

// // 3. Check whether a person is eligible to vote.
// var age = 18
// if (age >= 18){
//     console.log('Eligible for Vote')
// }else{
//     console.log('Not Eligible')
// }

// // 4. Find the largest among two numbers.
// var x = 34
// var y = 85
// if (x > y){
//     console.log(`${x} is the largest Number`) // this is also solved by Math.max()
// }else{
//     console.log(`${y} is the largest Number`);
// }

// // 5. Find the largest among three numbers.
// var p = 43
// var q =236
// var r = 98
// if (p > q && p > r){
//     console.log(`${p} is the largest Numeer`);
// }else if(q > p && q > r){
//     console.log(`${q} is the largest Number`);
// }else{
//     console.log(`${r} is the largest Number`);
// }

// // 6. Check whether a year is a leap year.
// var year = 2200
// if (year % 4 ==0 && (year % 100 != 0 || year % 400 == 0)){
//     console.log(year , ' is is leap year');
// }else{
//     console.log('not a leap year')
// }

// // 7. Check whether a number is divisible by both 3 and 5.
// var z = 60
// if (z % 5 === 0 && z%3 === 0){
//     console.log('yes this is divisible by both 3 and 5');
// }else{
//     console.log('not divisible')
// }

// // 8. Create a simple grading system: 90+ → A, 75+ → B, 50+ → C, below 50 → Fail
// var marks = 97
// if (marks > 90 && marks <= 100){
//     console.log('Grade A')
// }else if(marks > 75 && marks <= 90){
//     console.log('Grade B')
// }else if(marks > 50 && marks <= 75){
//     console.log('Grade C')
// }else{
//     console.log('Fail')
// }
// console.log();

// // 9. Check whether a character is a vowel or consonant.
// var alp = 'y'
// if ((alp == 'a') || (alp == 'e') || (alp == 'i') ||(alp == 'o') || (alp == 'u')){
//     console.log('Vowel')
// }else{
//     console.log('consonent');
// }

// // 10. Create a calculator using switch statement.
// var a1 = 24
// var a2 = 6
// var operation = '*'
// switch(operation){
//     case '+':
//         console.log(a1+a2);
//         break
//     case '-':
//         console.log(a1-a2);
//         break
//     case '*':
//         console.log(a1*a2);
//         break
//     case '/':
//         console.log(a1/a2);
//         break
//     default : 
//     console.log('invalid operation');
// }

// // 11. Print the day name based on a number (1–7).
// var day = 2
// switch(day){
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break
//     case 3:
//         console.log('Wednesday');
//         break
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break
//     case 6:
//         console.log('Saturday');
//         break
//     case 7:
//         console.log('Sunday');
//         break
// }

// // 12. Check whether a username is "admin" and password is "1234".
// var user = 'admin'
// var pass = '1234'
// if (user == 'admin' && pass == 1234){
//     console.log('Correct');
// }else{
//     console.log('Incorrect');
// }


// // *************************************** Truthy & Falsy

// // 1. Check whether an empty string is truthy or falsy.
// var a = ''
// if (a){
//     console.log('Truthy');
// }else{
//     console.log('Falsy');
// }

// // 2. Check whether 0 is truthy or falsy.
// var b = 0
// if (b){
//     console.log('Truthy');
// }else{
//     console.log('Falsy');
// }

// // 3. Check whether [] is truthy or falsy.
// var c = []
// if (c){
//     console.log('Truthy');
// }else{
//     console.log('Falsy');
// }

// // 4. Create a variable and print "Valid" if it has a value otherwise print "Invalid".
// var d
// if (d == '' || d == undefined){
//     console.log('Invalid');
// }else{
//     console.log('valid');
// }


// // *************************************** Ternary Operator

// // 1. Check whether a number is even or odd using ternary operator.
// var num = 53
// var ans = (num % 2 == 0)?'Even': 'Odd'
// console.log(ans);

// // 2. Check whether age is above 18 using ternary operator.
// var age = 17
// console.log((age >= 18 ? 'Adult' : 'child'));

// // 3. Find the greater number between two values using ternary operator.
// var a = 32
// var b = 63
// console.log((a>b)?`${a} is Gratest`: `${b} is Gratest`)


// // *************************************** Mixed Practice Questions

// // 1. Create a mini biodata program using variables and template literals.
// var user = 'Mantu Tiwari'
// var age = 29
// var prof = 'Developer'
// console.log(`My name is ${user} having ${age} year old by profession i am a ${prof}`);

// // 2. Calculate the area of a rectangle.
// var l = 34
// var b = 32
// console.log('Area of rectangle :', 2*(l+b));

// // 3. Calculate the simple interest.
// var p = 50000
// var r = 5
// var t = 3
// console.log('The si is : ', (p*r*t)/100);

// // 4. Convert temperature from Celsius to Fahrenheit.
// var temperature = 43
// console.log('The temperature in f :', (temperature*1.8)+32);

// // 5. Convert kilometers into meters.
// var dist = 5
// console.log('The distance in m is : ' , dist*1000 );

// // 6. Calculate total marks and percentage of 5 subjects.
// var subMarks = [86,94,75,79,96]
// var marks = subMarks[0]+subMarks[1]+subMarks[2]+subMarks[3]+subMarks[4]
// console.log('Total Marks ', marks);
// console.log('Percentage ', marks/5);

// // 7. Calculate electricity bill based on units consumed.
// var unit = 84
// console.log('Electricity bill', unit*8);

// // 8. Create a username generator using first name and birth year.
// var fname = 'Mantu Kumar Tiwari'
// var doy = 2004
// console.log('The user Name is :', fname.split(' ')[0]+doy);
// //  here split is used to store the string in the form of array and then access the index 0 array

// // 9. Check whether a string starts with a specific letter.
// var str = 'hello kaise ho '
// console.log('It start with :', str.startsWith('h'));

// // 10. Count the total characters in a sentence excluding spaces.
// var s = 'Roman Reigns'
// console.log('The length of string without string is :' ,s.replaceAll(' ', '').length);


// // *************************************** Logical Thinking Questions

// // 1. Take two numbers and print which one is greater.
// var num1 = prompt('Enter the first Number: ')
// var num2 = prompt('Enter the Second Number: ')
// console.log(Math.max(num1, num2), 'is the largest number');

// // 2. Check whether a number lies between 10 and 50.
// var a = 67
// if (a>=10 && a<=50){
//     console.log('yes it lies');
// }else{
//     console.log('no it do not lie');
// }

// // 3. Check whether a password length is greater than 8.
// var pass = prompt('Enter the password :')
// if (pass.length > 8){
//     console.log('Yes it is greater than 8');
// }else{
//     console.log('No pleasy Retry');
// }

// // 4. Check if a person can drive:
// var age = 37
// if (age > 18){
//     console.log('Yes, you cam drive');
// }else {
//     console.log('No, you cannot drive');
// }

// // 5. Check whether a number is divisible by 2, 3, or both.
// var n = prompt('Enter the Number: ')
// if (n%2==0 || n%3==0){
//     console.log('Yes it is divisible with 2 or 3 or both');
// }else{
//     console.log('not divisible');
// }

// // 6. Print "Good Morning", "Good Afternoon", or "Good Evening" based on time.
// var time = 11
// if (time>=6 && time<12){
//     console.log('Good Morning');
// }else if (time>=12 && time<16){
//     console.log('Good Afternoon');
// }else if(time>=16 && time<20){
//     console.log('Good Evening');
// }else{
//     console.log('invalid input');
// }

// // 7. Find whether a number is a multiple of 10.
// var a = 390
// if (a%10==0){
//     console.log("yes Multiple of 10");
// }else{
//     console.log('Not a multiple of 10');
// }

// // 8. Create a simple discount calculator.
// var mp = 200
// var dis = mp - (0.2*mp)
// console.log('The product after 20% discout is :', dis);

// 9. Check whether a product is in stock. (not solved)
const prod = {
    name: 'laptop',
    stock: 2,
    price: 60000
}
if (prod.stock > 0){
    console.log('In stock');
}else{
    console.log('out of stock');
}

// // 10. Calculate final bill after GST.
// var b = 200
// console.log('the final bill after gst is ', b+(0.18*b));


// *************************************** Challenge Questions for Beginners

// 1. Generate a random OTP of 4 digits.
// let rand = Math.floor(Math.random() * (max - min + 1)) + min; 
console.log('The otp is ', Math.floor(Math.random()*(9999-1000+1))+1000);

// 2. Reverse a 3-letter string manually.
var s = 'man'
console.log('The string after reversed:',s[2]+s[1]+s[0]);

// 3. Find the last character of a string.
var s1 = 'mantu'
console.log(s1[s1.length -1]);

// 4. Convert a full name into uppercase initials. (not solved)
var s2 = 'mantu kumar tiwari'
console.log(s2.toUpperCase());

// 5. Check whether two strings are equal ignoring case sensitivity.
var x = 'mantu'
var y = 'Mantu'
if (x.toLowerCase() == y.toLowerCase()){
    console.log('Equal');
}else{
    console.log('Not Equal');
}

// 6. Create a simple login validation system.
var userName = 'roman'
var pass = 12345
if (userName == 'roman' && pass === 12345){
    console.log('Valid');
}else{
    console.log('Invalid');
}


// 7. Find whether a number is a 2-digit or 3-digit number.
var num = 783
if (num>=10 && num<100){
    console.log('Two digit Number');
}else if (num>=100 && num<1000){
    console.log('Three digit Number');
}else {
    console.log('invalid input');
}

// 8. Create a mini ATM balance checker.
var balance = 5000
var checkBalance = () => {
    console.log('Your Balance is :', balance);
}
var withdraw = (a) => {
    if (a <= balance){
        console.log('withdraw successfully');
        console.log('your current balance is :', balance-a);
    }else{
        console.log('Insufficient balance');
    }
}
checkBalance()
withdraw (1000)

// 9. Simulate a traffic light system using switch.
let signal = 'Red'
switch (signal) {
    case 'Green':
        console.log('You can Cross');       
        break;
    case 'Red':
        console.log('Stop');       
        break;
    case 'Yellow':
        console.log('Pass Slowely');       
        break;
}

// 10. Build a small marksheet generator using variables and conditionals.
var student = 'Rohan'
var mathMarks = 87
var sciMarks = 96
var sstMarks = 79
var totalMarks = mathMarks+sciMarks+sstMarks 
var percent = totalMarks/3
console.log('Total Marks is :',totalMarks );
console.log('Percentage is :',percent.toFixed(2),'%');


// self Practice 
console.log('hello' - 2);
let sa = 5
console.log(sa++);
console.log(++sa);
console.log(5 === '5');

if ([]){
    console.log('run');
}

console.log(true + true + false);
{
    var abc = 10
}
console.log(abc);
console.log(typeof(null));

let x1
let x2 = null
console.log(x1 == x2);
console.log([]+[]);