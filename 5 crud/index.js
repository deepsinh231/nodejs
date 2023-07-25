const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filepath = `${dirPath}/Hello.txt`;

fs.writeFileSync(filepath, "This is hello word");

// fs.readFile(filepath,'utf-8',(err,files)=>{
//     console.log(files);
// })

// fs.appendFile(filepath," This is new ! ",(err)=>{
//   if(!err) console.log("this is update");
// })

// fs.rename(filepath,`${dirPath}/Hello_1.txt`,(err)=>{
//     if(!err) console.log("This rename");
// })

// fs.unlinkSync(`${dirPath}/Hello_1.txt`)