const express=require('express');
const app=express();

app.get('',(req,res)=>{
    console.log("Data Req is",req.query.name);  //http://localhost:5000/?name=deep
    res.send(`Hello <a href="/about">About</a>`)
})

app.get('/home',(req,res)=>{
    res.send(`
    
    <a href="/">Home page</a>`)
})

app.get('/about',(req,res)=>{
    res.send(`Hellow about Page <input type="text" value="${req.query.name}"/> <button>button</button>  <br/><a href="/home">Home page</a>`)
})
app.get('/json',(req,res)=>{
    res.send([
        {
            name:"deep",
            email:"deep@gmail.com"
        },
        {
            name:"raju",
            email:"rajurashtogi@gmail.com"
        }
    ])
})

app.listen(5000);