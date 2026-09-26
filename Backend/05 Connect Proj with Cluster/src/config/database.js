const { default: mongoose } = require("mongoose");

// this code is used to connect db
const conneceDb = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://mantutiwariai_db_user:cohort789@cohortcluster.zpyttqm.mongodb.net/?appName=CohortCluster',
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log("error while connecting mongoose", error);
  }
};

module.exports = conneceDb