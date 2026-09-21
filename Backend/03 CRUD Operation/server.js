const experss = require('express')
const app = experss()
let port = 4000

let data = {
    name: 'helloWorld',
    age: 4444,
    address: 'Database Data'
}


app.listen(port, () => {
    console.log(`i am inside port ${port} `);
})
