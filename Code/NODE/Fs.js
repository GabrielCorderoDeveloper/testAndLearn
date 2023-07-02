const fs = require('fs');

function read(path) {
    fs.readFile(path, (err, data) => {
        console.log(data.toString());
    })
}

function write(path, content) {
    fs.writeFile(path, content, (err) => {
        if (err) {
            console.log('Task failed', err)
        } else {
            console.log('Task completed');
        }
    });
}

function deleteFile(path) {
    fs.unlink(path, (err) => {
        if (err) {
            console.log('Failed', err);
        } else {
            console.log('Deleted')
        }
    })
}

// read(__dirname + '/File.txt')
// write(__dirname + '/File20.txt', 'I am the real deal!');
deleteFile(__dirname + '/File20.txt')