const { add, sup } = require("./Mathe")
const fs = require("fs")
const crypto = require("crypto")
console.log("Hello");

console.log(add(6, 59));
console.log(sup(6, 59));
console.log(fs);
console.log(crypto);
// ASync
fs.writeFile("./deep.txt", "Solanki Deepsinh", (ee) => { });
// Sync
fs.writeFileSync("./deep.txt", "Solanki Deepsinh P");

fs.readFile("./deep.txt", "utf-8", (errr, results) => {
    if (errr) {
        console.log(errr, "errrssssss");
    } else {
        console.log(results);
    }
});
const rusult = fs.readFileSync("./deep.txt", "utf-8")
console.log(rusult);

