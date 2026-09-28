const { default: mongoose } = require("mongoose");

let connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/notes-app");
    console.log("Mongo DB connected");
  } catch (error) {
    console.log("db connection error", error);
  }
};

module.exports = connectDb;
