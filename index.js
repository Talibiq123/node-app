// console.log("Hello world!");
// const lib = require("./lib.js");
// import {sum, diff} from "./lib.js";
// const fs = require("fs");

// const t1 = performance.now();
// const text = fs.readFileSync('demo.txt', 'utf-8')

// fs.readFile('demo.txt', 'utf-8', (err, txt) => {
//     console.log(txt);
// })
// console.log(text);


// console.log(lib.sum(2, 3), lib.diff(10, 5));
// console.log(sum(2, 3), diff(10, 5));

// const a = 5;
// console.log(a);
// const t2 = performance.now();
// console.log(t2-t1);

// function diff(a, b) {
//     return a - b;
// }


const express = require('express');

console.log('Hello world');

const server = express();
server.listen(8080);
