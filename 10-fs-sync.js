const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./txt/input.txt", "utf8");
console.log(first);

writeFileSync("./txt/starts.txt", `Here is the result: ${first}`, {
  flag: "a",
});
console.log("done with task");
console.log("starting the next one");
