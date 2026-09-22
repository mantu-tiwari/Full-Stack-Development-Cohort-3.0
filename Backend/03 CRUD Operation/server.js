const experss = require('express')
const app = experss()
let port = 4000

app.use(experss.json())  // this is MiddleWare

// in future this data is comes from database
let data = {
    name: 'helloWorld',
    age: 4444,
    address: 'Database Data'
}

// Read
// jo database se data hai wo isi process se jata hai 
// get mtlb data backend se jaa rha hai
app.get('/', (req, res) => {
    console.log('data has been sent');
    res.send(data)
})

// Create
app.post('/create', (req, res) => {
    let body = req.body // isme frontend se bheja hua data aata hai 
    console.log(body); // this help to show the data comes from frontend
    res.send(body) // this will show output on postman
})

app.listen(port, () => {
    console.log(`i am inside port ${port} `);
})
