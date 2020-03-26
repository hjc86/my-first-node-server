var http = require("http");
var url =require("url");
const { parse } = require('querystring');

http.createServer(function(req, res) {

    let body='';


    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        // res.writeHead(200, {'Content-Type':'text/html'}); 
        let bodyObject = parse(body);        
        let reversedBody= bodyObject.string1.split('').reverse().join('');
        res.end(
            `<h1 style="background-color: red; text-align: center;"> this is our reversed text: ${reversedBody} </h1>
            <h1 style="background-color: green; text-align: center;"> this is our original text: ${bodyObject.string1} </h1>
            
            `); 
    });

}).listen(8080);