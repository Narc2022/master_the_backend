// const http = require("http");
// const myName = require("./features")

import http from 'http'
import myName from './features.js'

const server = http.createServer((req,res) => {

    if(req.url == "/"){
        res.end('<h1>home</h1>');
    }
    else if(req.url === "/about"){
        res.end('<h1>about</h1>');
    }else if(req.url === "/contact"){
        res.end('<h1>contact</h1>');
    } else {
        res.end('<h1>Page Not Found</h1>');
    }
});

server.listen(4000, () => {
  console.log("server is working");
});