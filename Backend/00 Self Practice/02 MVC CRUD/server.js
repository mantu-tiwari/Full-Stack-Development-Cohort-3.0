require('dotenv').config()

const dns = require('dns')
dns.setServers(["8.8.8.8", "1.1.1.1"])

let app = require('./src/app')
let port = process.env.port || 3500

app.listen(port, () => {
    console.log('i am runnging on the port')
})

