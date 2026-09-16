console.log('hello');
console.log('backend started');

let http = require('http')
let server = http.createServer((res, req) => {
    console.log('hello i am server');
    res.end('ok maine tumhari baat sun li')
})

server.listen(3000, () => {
    console.log('servier is runngng on port 3000');
})