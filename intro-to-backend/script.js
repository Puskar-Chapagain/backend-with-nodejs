const { exec } = require('child_process');
const fs = require('fs')
const path = require('path');

//pwd
// console.log("Current working directory:", process.cwd());

const filePath = path.join(__dirname, 'text.txt');
const text = fs.readFileSync(filePath)
console.log(text);
// console.log(text.toString())

// to open any application in nodejs - in Linux 
exec("google-chrome");
// exec("//filepath")

