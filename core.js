// the require is essentially bringing in a module under path
const path = require("path");

const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

console.log(dirUploads);
console.log('\n\n')

// Also the utilities module
const util = require("util")
console.log("Now with util below:   ");
util.log(path.basename(__dirname));
util.log("^ Directory Name");
util.log(path.basename(__filename));
util.log("^ File Name");

// V8 Module
const v8 = require("v8");
util.log(v8.getHeapSpaceStatistics())


// We can also destructure modules. take the item we want and put em in curly braces
const { log } = require("util")
log("\n Print with deconstructed")