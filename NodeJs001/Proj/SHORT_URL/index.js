const express = require("express")
const urlRoute = require("./Routes/url")
const { connectToMongoDB } = require("./Contect")

const PORT = 8003;
const app = express()
connectToMongoDB("mongodb://127.0.0.1:27017/short-url");

app.use(express.json())
app.use('/url', urlRoute)
app.get('/:shortId',)



app.listen(PORT, () => console.log(`Server Started At Port is ${PORT}`))