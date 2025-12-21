const http = require('http');

const arr =[
    {
        name:"joydeb",
        age:23,
        gender:'male'
    },
    {
        name:"mala",
        age:20,
        gender:'female'
    },
    {
        name:"ajay",
        age:30,
        gender:'male'
    }
]

http.createServer((req,resp)=>{
    resp.setHeader("Content-type", "application/json")
    resp.write(JSON.stringify(arr))
    resp.end()

}).listen(4000)