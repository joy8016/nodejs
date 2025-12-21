const http = require('http');
http.createServer((req, resp)=>{
    resp.write('this is joydeb maity');
    resp.end('hello joy')
}).listen(4800);

http.createServer((req, res)=>{
    res.write("this is joy")
    res.end();
}).listen(4900);

http.createServer((req, res)=>{
    res.write("this is joydev")
    res.end();
}).listen(4700);