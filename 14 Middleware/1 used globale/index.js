const express = require('express');
const app = express()

const resfilter=(res,rsp,next)=>{
    if(!res.query.age){
        rsp.send("<h1>plz add age</h1>")
    }else if(res.query.age<18){
        rsp.send("<h1>you can not acces page</h1>")
    }else{
        next()
    }
}
app.use(resfilter);
app.get('', (rep, resq) => {
    resq.send("<h1>wellcome to page </h1>")
})
app.get('/admin', (rep, resq) => {
    resq.send("<h1>wellcome to admin page </h1>")
})
app.listen(5000)