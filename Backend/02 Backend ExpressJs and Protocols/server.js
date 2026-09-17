// // this code make server to my laptop
// let http = require("http");
// let server = http.createServer((request, response) => {
//   console.log("mai create server me hu");
//   response.end("ok done");
// });
// server.listen(3000, () => {
//   console.log("i am inside port 3000");
// });

// path add karna url me
let http = require("http");
let server = http.createServer((request, response) => {
  console.log("mai create server me hu");
  if (request.url === "/") {
    response.end("ok done");
  }
  if (request.url === "/home") {
    response.end("i am inside home");
  }
  if (request.url === "/shop") {
    response.end("i am inside shop");
  }
  if (request.url === "/about") {
    response.end("i am inside about");
  }
});
server.listen(3000, () => {
  console.log("i am inside port 3000");
});
