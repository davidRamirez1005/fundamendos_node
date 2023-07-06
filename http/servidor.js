import { createServer } from "http";
import { readFile } from "fs/promises";

const appHttp = createServer(async (req, res) => {
  if (req.url == "/") {
    try {
      const data = await readFile("http/index.html", "utf-8");
      console.log(data);
      res.end(data);
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      res.end("Error 500");
    }
  } 
  else if (req.url == "/home") {
    try {
      const data = await readFile("http/prueba.html", "utf-8");
      res.end(data);
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      res.end("Error 500");
    }
  }
});

const config = {
  hostname: "127.60.70.20",
  port: 5015
};

appHttp.listen(config, () => {
  console.log(`http://${config.hostname}:${config.port}/`);
});
