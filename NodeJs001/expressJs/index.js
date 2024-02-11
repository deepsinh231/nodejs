// const fs = require("fs");
// const http = require("http");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
    return res.send(`Hello ${req.query.name}`)
})
app.get("/about", (req, res) => {
    return res.send("Hello From Home about")
})


app.listen(8000, () => { console.log("Start Server") });
// const MyServ = http.createServer(app);
// MyServ.listen(8000, () => { console.log("Start Server") });