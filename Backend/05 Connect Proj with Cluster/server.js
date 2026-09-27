// this will fix the network ip isssue 
const dns = require('dns')
dns.setServers(["8.8.8.8", "1.1.1.1"])

const express = require("express");
const mongoose = require("mongoose");
const app = express();
let port = 4000;

// process to connect mongoDB to our code
const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mantutiwariai_db_user:cohort123@cohortcluster.nuryz4n.mongodb.net/?appName=CohortCluster",
    );
    console.log("DB connected");
  } catch (error) {
    console.log("connecting db error", error);
  }
};
connectDb();

app.get("/", (req, res) => {
  res.send("i am running" );
});

app.listen(port, () => {
  console.log(`i am running on the port ${port }`);
});
