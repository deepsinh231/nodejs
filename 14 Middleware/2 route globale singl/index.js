const express = require('express');
const resfilter = require('./resfilter');
const app = express();
const route = express.Router();


route.use(resfilter);

app.get('', resfilter,(rep, resq) => {
    resq.send("<h1>wellcome to page </h1>")
})
app.get('/user', (rep, resq) => {
    resq.send("<h1>wellcome to user page </h1>")
})
route.get('/admins', (rep, resq) => {
    resq.send("<h1>wellcome to admin page </h1>") //erro
})
app.listen(5000)