const experss = require('express')
const app = experss()
let port = 4000

app.use(experss.json())  // this is MiddleWare for accepting data

// in future this data is comes from database
// let data = {
//     name: 'helloWorld',
//     age: 4444,
//     address: 'Database Data'
// }
let user = []

// get - Read
// jo database se data hai wo isi process se jata hai 
// get mtlb data backend se jaa rha hai
app.get('/', (req, res) => {
    console.log('data has been sent');
    // res.send(data)
    res.send(user)
})

// Create
app.post('/create', (req, res) => {
    let body = req.body // isme frontend se bheja hua data aata hai 
    // console.log(body); // this help to show the data comes from frontend
    // console.log(user); 
    // res.send(body) // this will show output on postman
    user.push(body)
    // res.send(user)
    res.send('User Saved Successfully')
})

// Delete
app.delete('/delete/:id', (req,res) => {
    let {id} = req.params
    // res.send('hello')
    // console.log(id); 
    let userData = user.filter((e) => {
        return e.id !== id
    })
    user = userData
    res.send(userData)
})



app.listen(port, () => {
    console.log(`i am inside port ${port} `);
})
