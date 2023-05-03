const { error } = require("console");
const fs = require("fs");

const data = fs.readFileSync("write.txt","utf-8");
console.log("data is: "+data)
console.log("After the data")

