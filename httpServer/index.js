const http = require("http");
const server = http.createServer((request, response)=>{
    response.end("Hello team: ");

});

server.listen(8000, "localhost", ()=>{
    console.log("Listening to the port 8000")
});

