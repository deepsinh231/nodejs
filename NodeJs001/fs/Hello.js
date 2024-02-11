const fs = require("fs");
const { loadavg } = require("os");

// // ASync
// fs.writeFile("./deep.txt", "Solanki Deepsinh", (ee) => { });
// // Sync
// fs.writeFileSync("./deep.txt", "Solanki Deepsinh P");

// fs.readFile("./deep.txt", "utf-8", (errr, results) => {
//     if (errr) {
//         console.log(errr, "errrssssss");
//     } else {
//         console.log(results);
//     }
// });
// const rusult = fs.readFileSync("./deep.txt", "utf-8")
// console.log(rusult);

// fs.appendFileSync("./deep.txt" ,`${Date.now()} Hello \n`) //add back

// fs.cpSync("./deep.txt","./copy.txt") //copy

// fs.unlinkSync("./copy.txt"); //del

// console.log(fs.statSync("./deep.txt").isFile()); //Read log

fs.mkdirSync("./my-docs/A/B", { recursive: true }) //File Cretae

