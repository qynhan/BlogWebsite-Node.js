const fs = require('fs'); // fs (file system) module built into node

// reading files, async func
// fs.readFile('./docs/blog1.txt', (err, data) => { // funciton fires once readFile is done
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

// writing files, async func
fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
    console.log('file was written');
});

fs.writeFile('./docs/blog2.txt', 'hello, world', () => {
    console.log('file was written');
});

// directories
if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if (err){
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', () => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}