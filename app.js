// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed
// console.log(module);
// console.log(require);

// setInterval(() => {
//   console.log("Hello World");
// }, 1000);

const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const filePath = path.join("/content/", "myfolder", "text.txt");
console.log(filePath);
const basePath = path.basename(filePath);
console.log(basePath);
console.log(path.resolve(__dirname, "content"));

// app.use(compression());
app.get("/", (req, res) => {
  let data = "Akbar and Hassam are good Developer\n";
  res.send(data.repeat(10000));
});

app.listen(8080);
