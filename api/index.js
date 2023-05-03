const http = require("http")
const fs = require("fs");
const url = require("url");

http.createServer(function (req,res){
    if(req.url == "/books"){
        fs.readFile(`${__dirname}/data.json`,"utf-8", (error, data) => {
            if(error){
                console.error(error);
                return;
            }
            console.log(JSON.parse(data))
            res.end(data);
        })
        

    }
}).listen(8000);
