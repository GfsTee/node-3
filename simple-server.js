const http = require('http')

http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url);
    if (req.url === '/') {
        res.write("<h1>Hallo Welt</h1>")
        res.end()
    }
}).listen(5000, () => console.log("Server running..."))