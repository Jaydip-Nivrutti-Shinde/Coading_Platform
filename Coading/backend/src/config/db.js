const mongoose = require('mongoose');
require('dotenv').config();

async function main() {
    try {
        await mongoose.connect(process.env.DB_CONNECT_STRING );
        console.log("MongoDB Connected Successfully!");
        console.log("Database: Leetcode");
    } catch (error) {
        console.log("Connection Failed:", error.message);
    }
}

module.exports = main;