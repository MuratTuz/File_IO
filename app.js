
/**
 * Built-in fs module is used for reading a file with fs.readFile method and is also used for creating a file with
 * fs.appendFile method.
 * 
 * Besides, if the file OrnekDosya.txt cannot be read in any reason therefore, we create a new file having got the file 
 * name from user using readline.question command 
 */
import fs from 'fs'
import readline from 'readline'

// This interface must be created before using readline module
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const filePath = './OrnekDosya.txt';

fs.readFile(filePath, (err, data) => {
    //if there is an error reading the current file then print an error message to screen
    if (err) {
        console.log('There is error reading the file' + err.message);
        // if there is an error reading the current file then ask the name of new file which will be created
        rl.question('New file will be created, so please enter a name without extension for the new file :  ', (name) => {
            const fileName = name + '.txt';
            // Create the new file using user's input and appendFile method
            fs.appendFile(fileName, 'A new file is created', 'utf8', (err) => {
                if (err) console.log('Error in file creation with the error message is : ' + err.message)
                else console.log(`File ${fileName} is created succesfully`);
                rl.close();
            });
        });
    }
    // If there is NOT any error reading the file then print the content of the file to screen
    else {
        console.log('File content is : ' + data);
        rl.close();
    }
});



