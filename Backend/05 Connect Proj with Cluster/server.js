const express = require('express')
const app = express()

let port = 4000

app.get('/', (req, res) => {
    res.send('i am testing')
})

app.listen(port, () => {
    console.log('i am inside port');
})