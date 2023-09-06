const mongoose = require('mongoose');
const colors = require('colors');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB'.green);
        console.log(`Server running On ${mongoose.connection.host}`.bgCyan.white);
    } catch (e) {
        console.log(`${e}`.bgRed)
    }
}

module.exports = connectDb;
