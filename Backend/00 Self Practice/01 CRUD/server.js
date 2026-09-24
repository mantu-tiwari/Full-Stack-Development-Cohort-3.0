const experss = require('express')
const app = experss()
app.use(experss.json()) // middleware

let port = 4000
// let user = {
//     name: 'rahul',
//     age: 23, 
//     country: 'India'
// }
let user = []

// Reading Data
app.get('/', (req, res) => {
    res.send(user)
})
// app.get('/shop', (req,res) => {
//     res.send('mai data hu')
// })

// Creating Data
app.post('/create', (req, res) => {
    let body = req.body // isme frontend se data aata hai
    console.log(body);
    // res.send('creating data') // koi ek hi data show karega ya to ye ya niche wla
    user.push(body)
    res.send('user Saved Successfully')
})

// Updating Data
app.put('/update/:id', (req, res) => {
    let {id} = req.params
    let {name} = req.body
    console.log('param', id);
    console.log('body', name);
    // res.send('update running')
    let dataAfterUpdata = user.map((e) => {
        return e.id === id ? {...e, name} : e
    })
    res.send(dataAfterUpdata)
    user = dataAfterUpdata // this help to update data in 
})

// Deleting Data
app.delete('/delete/:id', (req, res) => {
    let {id} = req.params // this help to get the id form link
    // console.log(id);
    // res.send('i am deleteing user')
    let dataAfterDelete = user.filter((e) => {
       return e.id !== id
    })
    user = dataAfterDelete
    res.send(dataAfterDelete)
})

app.listen(port , () => {
    console.log(`Running on port ${port}`);
})