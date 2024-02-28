const mongoose = require("mongoose")

async function connectToMongoDB(url) {
    return mongoose.connect(url).then(() => console.log("MongoDB connect")).catch((err) => console.log("MongoDB Erro ", err));
}

module.exports = { connectToMongoDB }