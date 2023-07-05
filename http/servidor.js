import {createServer} from "http";
import fs from "fs";

const appHttp = createServer((req, res) => {
    if(req.url == "/"){
        fs.readFile("./index.html","utf-8", (err, data)=>{
            console.log(data);
            res.end();
        })
    }else if (req.url == "/home"){
        fs.readFile("./prueba.html","utf-8", (err, data)=>{
            res.end(data);
        })
    }
});

const config ={
    hostname: "127.60.70.20",
    port: 5015
};

appHttp.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}/`);
});