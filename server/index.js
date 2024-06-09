const http = require("http");
const fs=require("fs");
const url=require("url");
const myServer = http.createServer((req,res) => {
  if(req.url==='/favicon.ico') return res.end();  // ignoring /favicon.ico
  const log=`${Date.now()}: ${req.method} ${req.url} Getting new request\n`;
  const myurl=url.parse(req.url,true);
  console.log(myurl);
  fs.appendFile("log.txt",log,(err,data)=>{
    switch(myurl.pathname){
      case '/':
      res.end("This is home page");
      break;
      case '/about':
        const username=myurl.query.myname
        res.end(`HI, ${username}`);
      break;
      case '/search':
        const search=myurl.query.search_query;
        res.end("Here is result for : "+search);
      break;
      case "/signup":
        if(req.method==="GET") res.end("This is an sign up Form");
        else if(req.method==="POST"){
          // DB query
          req.end("success");
        }
      default:res.end("404 not_found");
    }
  });
})

myServer.listen(8000,()=> console.log("server started"))