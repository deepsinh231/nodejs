const express = require("express");
const { logReqes } = require('./Middlewar')
const { connectMogoose } = require('./connect')
const UserRoutes = require("./Routes/User");

const app = express();
const PORT = 8000;

connectMogoose("mongodb://127.0.0.1:27017/Youtub-1")
app.use(express.urlencoded({ extended: false }))
app.use(logReqes('log.txt'))

app.use("/deep", UserRoutes)

app.listen(PORT, () => { console.log(`PORT SERVER IS ${PORT}`); })