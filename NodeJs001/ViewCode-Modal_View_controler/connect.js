const mongoose = require("mongoose");


async function connectMogoose(url) {
    return mongoose.connect(url)
        .then(() => console.log("Mongodb is Connect"))
        .catch((err) => console.log("Mongodb Connect Erro is:-", err));
}

module.exports = { connectMogoose }