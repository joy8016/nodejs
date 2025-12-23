const http = require('http');
const agv = process.argv
const port = agv[2]
console.log(port)
console.log(agv)

http.createServer((req, resp)=>{
    resp.writeHead(200, {'content-typr':'text/html'})
    resp.write(
        `<form>
        <input type='text' placeholder='enter name' name='name'>
        <input type='email' placeholder='enter email' name='email'>
        </form>`
    )
    console.log(req.url)

}).listen(port)