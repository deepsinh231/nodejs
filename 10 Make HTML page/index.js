const express=require('express');
const path=require('path')
const pathloc=path.join(__dirname,'public')
const app=express();

app.use(express.static(pathloc))
app.listen(5000);