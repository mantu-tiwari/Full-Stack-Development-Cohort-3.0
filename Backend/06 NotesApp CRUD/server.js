require('dotenv').config()
const dns = require('dns')
dns.setServers(["8.8.8.8", "1.1.1.1"])
const app = require('./src/app')
let port = process.env.port || 3500


app.listen(port, () => {
    console.log(`server is running on port`);
})