const { default: mongoose } = require("mongoose");

// process to connect mongoDB to our code
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri);
    console.log("DB connected");
  } catch (error) {
    console.log("connecting db error", error);
  }
};

module.exports = connectDb;
