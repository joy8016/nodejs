const http = require('http');
http.createServer((req, res) => {
    const age = 23;

    res.setHeader("Content-Type", "text/html")
    // res.write('<h5>joydeb maity</h5>')
    // res.write("<p>you are not my type</p>")
    res.write(`
        <html>
        <head></head>
        <body>

        <h1>joydeb maity</h1>
        <h2> `+ age +` </h2>
        </body>
        </html>

        `)
   
       


    res.end()

}).listen(4800)