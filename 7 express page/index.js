const express=require('express');
const app=express();

app.get('',(req,res)=>{
    res.send("Hellow")
})

app.get('/home',(req,res)=>{
    res.send("Hellow Home Page")
})

app.get('/about',(req,res)=>{
    res.send("Hellow about Page")
})

app.listen(5000);