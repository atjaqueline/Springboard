const fs = require('fs');
const process = require('process');

function cat(path){
    FileSystem.readFile(path, 'utf8', function(err, data){
        if(err) {
            console.error(`Error reading ${Path} ${err}`);
            process.exit(1);
        } else {
            console.log(data)
        }
    }); 
}

cat(process.argv[2]);