//we can use fs modile, it has usefull methods on it, such as readFile(), writeFile(), mkdir(), rmdir(), unlink()
const fs = require("fs"); // fs stands for File System

// reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });
//the first argument is - a relative path to the file you want to read, the second argument is the function(callback function)that will fire when the first  task is completed. It takes  two arguments, err - if was any error during the process of readFile() method, and data - the stuff that we read from the file.
// readFile() method is asynchronous , it means that it takes some time to complete its job.
// console.log('last line');
// this logs first, because JS  doesn't block the next code from being execited, since readFile() takes some time to complete its task, when its done fires the callback function.

// writing files
// fs.writeFile("./docs/blog1.txt", 'Hello World', () => {
//   console.log('file was written');
// })
//this time writeFile() method takes three arg. first - realive path to the file we want to write, text - we actially want to write to this file, third argument is a callback function.
// fs.writeFile("./docs/blog2.txt", 'Hello , again', () => {
//   console.log('file was written');
// })
// in the above example it creates a new file for us, if there is no such a file, with the text in it.
// create and delete directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

//we need to just specify what directory and where we want. it can throw an error if there is already exist the folder with  the exact same name. So we can use existsSync() method to check if the folder with the name exists or not, before to run mkdir(). we put ! before the fs.existsSunc because we need to inner code only when the condition is falsy,which means  the folder doesn't exist,
// deleting files
if (fs.existsSync("./docs/deleteMe.txt")) {
  fs.unlink("./docs/deleteMe.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}

//first we gonna check if the file with this name exists, when run the unlike() method
