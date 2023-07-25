const express=require('express');
const app=express();

app.get('',(req,res)=>{
    console.log("Data Req is",req.query.name);  //http://localhost:5000/?name=deep
    res.send("Hellow "+ req.query.name)
})

app.get('/home',(req,res)=>{
    res.send("Hellow Home Page")
})

app.get('/about',(req,res)=>{
    res.send("Hellow about Page")
})
app.listen(5000);