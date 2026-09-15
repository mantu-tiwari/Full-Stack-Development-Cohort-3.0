// this is the annotation form of declearing type of object
type UserObj = {
  name: string;
  age: number;
  isVerified: boolean;
  address: {
    state: string;
    city: string;
    country?: string; // this is optional ye baad me aayega
  };
};
let userData: UserObj = {
  name: "kartik",
  age: 23,
  isVerified: true,
  address: {
    state: "uttar Pradesh",
    city: "meerut",
  },
};
userData.name = "tejshwi";
console.log(userData);

// Function
// void me tum kuch return nhi kar sakte ho
let add = (a: number, b: number): number => {
  return a + b;
};
let ans: number = add(34, 34);
// console.log(ans);

let cb = (x: number, y: () => void) => {
  y(); // y is a function that's why we can call y here
  return x;
};
let res = cb(34, () => {});
console.log(res);

// Infinite loop question (doubt) currying
let sum = (num1: number) => {
  return (num2: number) => {
    if (num2 !== undefined) {
      return sum(num1 + num2);
    }
    return num1;
  };
};
// let data = sum(23)(45)();
// console.log(data);

// sum of number using rest parameter
let jor = (...rest : number[]) :number => {
  let data = rest.reduce((a, v) => {
    return a + v;
  },0);
  return data
};
let result = jor(1,2,3,4,5,6,7,8,9,10)
console.log('rest parameter result',result);

// alag se type banane ko type alias kehate hai
