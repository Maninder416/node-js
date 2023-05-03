const http = require("http");
const server = http.createServer((request, response)=>{
    if(request.url == "/"){
        response.end("Hello team: ");
    }
    else if (request.url == "/about"){
        response.end("About page ");

    }else{
        response.writeHead(404, {"content-type": "text/html"});
        response.end("<h1> 404 Error page </h1>");
    }

});

server.listen(8000, "localhost", ()=>{
    console.log("Listening to the port 8000")
});

