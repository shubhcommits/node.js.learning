const fs=require("fs");
const os=require("os");
console.log(os.cpus(),length);

fs.readFile("contacts.txt","utf-8",(err,result))