const express=require('express');
const path=require('path')
const pathloc=path.join(__dirname,'public')
const app=express();
// app.use(express.static(pathloc))

app.get('',(res,resp)=>{
    resp.sendFile(`${pathloc}/index.html`)
})
app.set("view engine",'ejs')

app.get('/profile',(res,resp)=>{
    const user={
        name:"Deepsinh",
        gmail:"deepsinh231@gmail.com",
        city:"Gir Somnath"
    }
    resp.render(`profile`,{user})
})
app.get('/home',(res,resp)=>{
    resp.sendFile(`${pathloc}/page.html`)
})
app.get('/aboutpage',(res,resp)=>{
    resp.sendFile(`${pathloc}/about.html`)
})
app.get('*',(res,resp)=>{
    resp.sendFile(`${pathloc}/404.html`)
})
app.listen(5000);