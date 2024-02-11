const http = require("http");
const fs = require("fs");
const url = require("url");

const MyServ = http.createServer((req, res) => {
    if (req.url === "favicon.ico") res.end();
    const myUrl = url.parse(req.url, true)
    console.log(myUrl);
    const log = `${Date.now()} :-> Date Rec And ${req.url} :-> url And Browg :->${req.headers["sec-ch-ua"]} \n`;
    fs.appendFile("./log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case '/': res.end(`Home Page`);
                break
            case '/data': res.end(`${log}`);
                break
            case '/name':
                const name = myUrl.query.name
                // http://localhost:8000/name?name=deep+solanki+Name
                res.end(`Hi , ${name}`);
                break
            case '/search':
                const search = myUrl.query.search_qurry
                // http://localhost:8000/search?search_qurry=deep+solanki+Name
                res.end(`Hi , youtub search_qurry ${search}`);
                break
            default: res.end(`404 Not Found`);
        }
    })
})


MyServ.listen(8000, () => console.log("Server start"))