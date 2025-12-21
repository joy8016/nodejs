const http = require('http');
http.createServer((req, resp)=>{
    resp.setHeader('Content-type', 'text/html')
    // console.log(req.method)
    if(req.url == '/'){
        resp.write('<h1>home page</h1>')
    }
    else if(req.url == '/login'){
        resp.write('<h1> login page </h1>')
    }
    else{
        resp.write('other page')
    }
    // resp.write('hello joydeb')
    resp.end("<h1>hello</h1>")
}).listen(4400)