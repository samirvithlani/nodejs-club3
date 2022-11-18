var fs = require("fs");

function readDataFromFille() {
  //var x = fs.readFileSync("./filehandling/input.txt", "utf8");
  var x = fs.readFileSync('./filehandling/users.json','utf8')
  var y = JSON.parse(x)
  console.log(y[0].name)
}
function writeDataToFile() {
  var d = "hello this is file.....";
  //fs.writeFileSync("./filehandling/input.txt", d);
  var d2 = [
    {
      name: "sachin",
      age: 23,
    },
    {
      name: "raj",
      age: 23,
    },
    {
      name: "mehta",
      age: 23,
    }
  ]
  fs.writeFileSync("./filehandling/users1.json",JSON.stringify(d2))
}
function appendDataToFile() {
  var d1 = "lkknhniuguih ";
  fs.appendFileSync("./filehandling/input.txt", d1);
}
function removeFile() {
  if (fs.existsSync("./filehandling/input.txt")) {
    fs.unlinkSync("./filehandling/input.txt");
  }
}
function createFolder() {
  fs.mkdirSync("./filehandling/folder1");
}
function removeFolder() {
    
  if (fs.existsSync("./filehandling/folder1")) {
    fs.rmdirSync("./filehandling/folder1");
  }
}
function copyfile(){

    fs.copyFileSync("./filehandling/input.txt","./filehandling/folder1/input.txt")

}


module.exports = {
  readDataFromFille,
  writeDataToFile,
  appendDataToFile,
  removeFile,
  createFolder,
  removeFolder,
  copyfile
};
