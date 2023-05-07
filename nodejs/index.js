import http from 'http'
// import { myName, meriBahena, myLoveName } from './own_modules/features.js'
import {generateLovePercent} from './own_modules/generateLovePercent.js'
import fs from 'fs';

const server = http.createServer((req,res) => {
    if(req.url == "/"){
        
          fs.readFile("./index.html",(error,home)=>{
            res.end(home )
          })
       
    }else if(req.url == "/generatelove"){
      res.end(`<h1>Love is ${generateLovePercent()} </h1>`);
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
