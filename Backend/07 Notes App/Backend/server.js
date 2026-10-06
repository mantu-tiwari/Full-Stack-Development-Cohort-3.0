require('dotenv').config()
const app = require('./src/app')

let port = process.env.port || 3000

app.listen(port, () => {
    console.log('i am running on the port');
})
