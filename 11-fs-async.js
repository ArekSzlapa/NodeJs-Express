const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  const first = result;

  readFile("./content/second.txt", "utf8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = res;

    writeFile(
      "./content/result-async.txt",
      `Here is the result ${first}, and second is: ${second}`,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
