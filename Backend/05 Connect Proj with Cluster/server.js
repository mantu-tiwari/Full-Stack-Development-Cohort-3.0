require('dotenv').config()
// this will fix the network ip isssue 
const dns = require('dns')
dns.setServers(["8.8.8.8", "1.1.1.1"])

const app = require('./src/app')
let port = 4000;

app.listen(port, () => {
  console.log(`i am running on the port ${port }`);
});
