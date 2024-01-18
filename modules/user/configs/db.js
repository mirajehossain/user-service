const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        console.log({ mongoURI });
        const options = { useNewUrlParser: true, useUnifiedTopology: true }
        return await mongoose.connect(mongoURI);
    } catch (err) {
        console.log(`Error while connecting DB`, err)
        process.exit(1);
    }
};

module.exports = { connectDB };