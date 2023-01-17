const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const connectDB = () => {
    mongoose.connect(
        process.env.DB_URI,
        {

        }
    )
        .then(() => console.log('MongoDB connected'))
        .catch((err) => {
            console.log(err);
        })
}

//
module.exports = connectDB;