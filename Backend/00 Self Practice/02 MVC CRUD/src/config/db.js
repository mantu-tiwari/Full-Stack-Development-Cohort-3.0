const { default: mongoose } = require("mongoose");

const databaseConnect = async () => {
    try {
        await mongoose.connect(process.env.mongodb_uri)
        console.log('database connnected');
    } catch (error) {
        console.log('error in connecting DB ', error);
    }
}

module.exports = databaseConnect