import http from `http`;

http.createServer(theServer).listen(3005);

function theServer(req, res) {
    console.log(`nueva petición`);
    console.log(req.url);
    switch (req.url) {
        case `/hola`:
            res.write("Bienvenido a hola");
            res.end();
            break;
        case `/node`:
            res.write("Comienza a aprender NodeJs");
            res.end();
            break;
        default:
            res.write("Error 404 Page No Found");
            res.end();
            break;
    }
}