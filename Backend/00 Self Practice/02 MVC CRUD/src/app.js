const express = require("express");
const StudentsModel = require("./models/users.model");
const databaseConnect = require("./config/db");
const studentsRoutes = require("./routes/users.route");
const app = express();
app.use(express.json()); // middleware

databaseConnect();

app.get("/", (req, res) => {
  res.send("hello this is testing");
});

app.use("/students", studentsRoutes);


module.exports = app;
