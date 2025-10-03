//Connection to MongoDB file
const mongoose = require('mongoose'); // default commonjs module
require('dotenv').config();

async function connectDB(){
    const uri = process.env.MONGODBATLAS_URI || process.env.MONGODB_URI;
    
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("connected to MongoDB");
}

module.exports = { connectDB, mongoose };
