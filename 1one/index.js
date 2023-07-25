//import export
let app = require('./app.js')
console.log(app.x + app.y);
console.log(app.z());

var x = 20;
let y = 20;
const z = 20;
console.log(app.x + app.y);

let arry = [3, 5, 5, 6, 8, 2, 6, 56, 35];
let resut = arry.filter((item) => {
    return item >= 6
})
console.log(resut);


//file crerat writeFileSync
const fs = require('fs')   //none globle module
console.log("code is prejent")  //globle module
fs.writeFileSync("Hello.html", "code is prejent")

const anythink = require('fs').writeFileSync;
anythink("Hello1.html", "code is prejents")

console.log(__dirname); //dir name
console.log(__filename); // file name

// server
// const http = require('http');
// const datacall = (res, resp)=> {
//     resp.write("<h1>Hello yar</h1>");
//     resp.end();
// }
// http.createServer(datacall).listen(5555);
//two
const http = require('http');

http.createServer((res, resp) => {
    resp.write("<h1>Hello,This me</h1>");
    resp.end();
}).listen(5555);

//peckeg use and isntal
const colors = require('colors');
console.log("red".red);
console.log("Green".bgYellow.red);


// var chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));
