console.log(process.argv[2]); // cmd node index.js and add vaslu to print

const fs = require('fs');
const input = process.argv;

if (input[2] == "add") {
    fs.writeFileSync(input[3], input[4])  // node .\index.js add apple.txt 'this is name'
} else if (input[2] == "remove") {
    fs.unlinkSync(input[3], input[4])   //  node .\index.js remove apple.txt
} else {
    console.log("this is not right");
}