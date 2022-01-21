//Synchronous

function sync(file) {
  const fs = require("fs");
  const data = fs.readFileSync("data.json", "utf-8");
  console.log(data);
  //   return file;
}
sync();

//asynchronous

function async() {
  const fs = require("fs");
  const data1 = fs.readFile("data.json", (err, data1) => {
    //for async. call backs..you wont have access to something you need (ie. data1) except through in the call back.
    if (err) throw err;
    // console.log(data1.toString("utf-8"));
  });
  return "done";
  //return file;
}
async();

//Promises
//
