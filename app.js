import fs from 'fs'
import readline from 'readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



const filePath = './OrnekDosya.txt';
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.log('There is error reading the file' + err.message);

        rl.question('New file will be created, so please enter a name without extension for the new file :  ', (fileName) => {
            fs.appendFile('./' + fileName + '.txt', 'A new file is created', 'utf8', (err) => {
                if (err) console.log('Error in file creation with the error message is : ' + err.message);
            });

            rl.close();
        });

    }
    else {
        console.log('File content is : ' + data);
    }
});

