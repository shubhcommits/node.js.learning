const http = require("http");
const fs=require("fs");
const myServer = http.createServer((req,res) => {
  const log=`${Date.now()}: ${req.url} Getting new request\n`;
  fs.appendFile("log.txt",log,(err,data)=>{
    // res.end("Hello server again");
    switch(req.url){
      case '/':res.end("This is home page");
      break;
      case '/about':res.end("this is an about page");
      break;
      default:res.end("404 not_found");
    }
  });
  // res.end("Hello from server again");
})

myServer.listen(8000,()=> console.log("server started"))