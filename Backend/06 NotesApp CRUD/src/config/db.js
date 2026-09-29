const { default: mongoose } = require("mongoose");

let connectDb = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri);
    console.log("Mongo DB connected");
  } catch (error) {
    console.log("db connection error", error);
  }
};

module.exports = connectDb;
