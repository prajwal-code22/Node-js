const {Buffer}= require('node:buffer');
const{addon}=require('./build/Release/addon.node');

buffer=Buffer.from("anish",'utf-16le');
console.log(buffer);
stringBuffer=buffer.toString("hex");
console.log(stringBuffer);
console.log(addon)
console.log(addon.add(2,4));