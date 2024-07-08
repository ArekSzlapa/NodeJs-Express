const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const textFile = readFileSync("./content/first.txt", "utf8");
const textFileSecond = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/third.txt",
  `Here is the result ${textFile}, and the second ${textFileSecond}`,
  { flag: "a" }
);

console.log("done");
console.log("starting next");
