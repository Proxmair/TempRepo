//FS Module

//Syncronous method

const fs=require('fs');

const file=fs.readFileSync('./text.txt','utf-8');
console.log(file);

//If the file is not present the node will create a file

fs.writeFileSync('./anothertext.txt',`This is another text that contains the data of fisrt file ${file}`,{flag:'a'});
//the third paremeter is optional which is used to append the text 
console.log("Task done");
console.log("Starting the next one");
//In this method code runs line by line starts