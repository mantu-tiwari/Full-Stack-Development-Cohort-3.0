const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('testing');
    res.send('testing')
})

module.exports = app