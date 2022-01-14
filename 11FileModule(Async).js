const fs=require('fs');

console.log("Task Starts")

fs.readFile('./text.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return err
    }
    const file1=result;
    fs.readFile('./text2.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return err
        }
        const file2=result;
    fs.writeFile('./text3',`This file contains both ${file1} and ${file2}`,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log("All Ended Successfully");
    })
    })
})
console.log("Starting the next Task");

