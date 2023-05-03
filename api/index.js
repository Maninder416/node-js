const http = require("http")
const fs = require("fs");
const url = require("url");


http.createServer(function (req,res){
    const data = fs.readFileSync(`${__dirname}/data.json`,"utf-8");
    const objectData = JSON.parse(data);
    if(req.url == "/books"){
        res.writeHead(200, { "content-type": "application/json" });
        res.end(data);
    
    }
}).listen(8000);
