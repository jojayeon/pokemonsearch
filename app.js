const XMLHttpRequest = require('xhr2'); // - 불러와서 해보기
const xml = new XMLHttpRequest();
const http = require("http")
const fs = require("fs");

const server = http.createServer((req,res)=> {
  if(req.method === "GET" && req.url === "/") {
    fs.readFile()
  }
});


