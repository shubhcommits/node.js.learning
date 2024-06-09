// file handling
const fs=require("fs");
// this is synchronous
// fs.writeFileSync("./test.txt","Hello synchronous");

// 
// fs.writeFile("./test.txt","Hello Asynchronous",(err,result)=>{
//   if(err){
//     console.log("Error",err);
//   }
//   else console.log(result);
// });
//*************************************
// READING FROM A FILE

// synchronous

// const result=fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

/* asynchronous */

// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//   if(err){
//     console.log("Error : ",err);
//   }
//   else{
//     console.log(result);
//   }
// })

/* appending to a file   */

// fs.appendFileSync("./test.txt",`${Date.now()} Hey there`);

//copying one file to another

// fs.unlinkSync("./copy.txt");  // to delwte a file

// fs.cpSync("./test.t","copy.txt"); 

// console.log(fs.statSync(" ./contacts.txt").isFile());

// fs.mkdir("my-docs/a");
