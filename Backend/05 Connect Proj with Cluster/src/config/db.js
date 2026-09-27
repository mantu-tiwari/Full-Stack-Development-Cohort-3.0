const { default: mongoose } = require("mongoose");

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

module.exports = connectDb