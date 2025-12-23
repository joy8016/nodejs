const http = require('http');
const fs = require('fs');
const arg = process.argv
const port = arg[2]

http.createServer((req,resp)=>{
    fs.readFile('html/web.html', 'utf-8',(err, data)=>{
        if(err){
            resp.writeHead(500,{'content-type':'text/plain'})
            resp.write('internal server error')
            resp.end()
            return
        }
        resp.writeHead(309,{'content-type':'text/html'})
        resp.write(data)
        resp.end()
    })
}).listen(port)

// fs.readFile('example.txt', 'utf-8',(err, data)=>{
//     if(err){
//         console.log(err);
//         console.log('hello')
//         return;
//     }
//     console.log(data);
//     console.log('joydeb')
// })
// console.log('this prints before the file content because fs is non-blocking');

