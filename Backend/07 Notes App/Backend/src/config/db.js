const { default: mongoose } = require("mongoose");

const connectDatabase = async() => {
    try {
        await mongoose.connect(process.env.mongodb_uri)
        console.log('database connected');
    } catch (error) {
        console.log('db connection error', error);
    }
}

module.exports = connectDatabase