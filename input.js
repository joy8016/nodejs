const http = require('http');
const { argv } = require('process');
const arg = process.argv;
console.log(arg)
const port = arg[2]
const name = arg[3];
http.createServer((req, resp)=>{
    resp.write('<h1>this is joydeb</h1>')
    resp.write('my name is anthony')
    
    resp.write(name)
    // console.log(req.method)
    resp.end();

}).listen(port)