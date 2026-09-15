"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 34;
let b = "this is string";
console.log(a);
console.log(b);
// Type inference and annotaion
// inference - first time jo data pass karenge wo khud ko assign kar lega
// annotation - isme data types ham provide karenge
let x = "rahul";
x = "sohan";
console.log(x);
// Primitive data types
// string, boolean, bigint, number, symbol, undefined
let name = "rahul";
console.log(name);
// Array and Tuples
// array me kitna bhi data assign kar sakte hai jabki tuples me predefined karna parega ki kitna data jane wla hai
let arr = [34, 4543, "hello", true, undefined];
console.log(arr);
let aa = [23, "jio", true, undefined];
let bb = [78, 32, 534, 234];
let cc = ["true", "console"];
// Tuples
let ttuple = [343, 5343];
let data = [{ name: "rohan" }, { name: "kartik" }, { name: "sohail" }];
console.log(data);
// union types - ek se jyada types ke requirement ke liye use hota hai
let yolo = "sohan";
yolo = true;
yolo = 342342;
let getStatus = "Complete"; // sirf Status me se hi correct lega else error lega
//# sourceMappingURL=index.js.map