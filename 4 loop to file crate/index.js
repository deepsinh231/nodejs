const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files')

for (i = 1; i <= 5; i++) {
    fs.writeFileSync(dirPath + `/Hello_${i}`, "This is File is " + i)
}

fs.readdir(dirPath, (err, files) => {
    files.forEach((item) => {
        console.log(item);
    })
})

// //delet this file
// for (i = 1; i <= 5; i++) {
//     fs.unlinkSync(dirPath+`/Hello_${i}`,"This is File is "+i)
// }