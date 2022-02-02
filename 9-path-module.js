const path = require("path");

console.log(path.sep);
const filePath = path.join("/txt", "input.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "/txt", "input.txt");
console.log(absolute);
