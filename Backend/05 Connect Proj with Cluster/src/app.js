const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]); 

const express = require("express");
const conneceDb = require("./config/database");
const app = express();



conneceDb();

app.get("/", (req, res) => {
  res.send("i am testing");
});

module.exports = app