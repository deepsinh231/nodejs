module.exports = resfilter = (res, rsp, next) => {
    if (!res.query.age) {
        rsp.send("<h1>plz add age</h1>")
    } else if (res.query.age < 18) {
        rsp.send("<h1>you can not acces page</h1>")
    } else {
        next()
    }
}