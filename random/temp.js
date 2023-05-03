const temp = require("fs")

//write file
const test2 = temp.writeFileSync("test.txt","new");
const hi = temp.readFileSync("test.txt");
console.log("data is: "+hi)

//data append
const data = "appendde data";
temp.appendFile("test.txt",data, (error) =>{
    if(error) throw error;
    console.log("Data appended to file");
});

// Read file
const read = temp.readFileSync("test.txt");
console.log("read file is: "+read)

// Delete file 
const path = './test.txt';
temp.unlink(path, (error) =>{
    if(error){
        console.error(error);
        return;
    }
    console.log("file deleted");
});