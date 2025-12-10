const fs = require('fs');
const os= require('os');
let a = console.log(os.platform());
console.log(a);
// fs.writeFileSync('dummy.txt', 'this is file is dummy file');

console.log(os.hostname());
console.log(os.machine());
console.log(os.type());
console.log(os.uptime());
console.log(os.cpus());