//Streams  - Start using data, before it has finished loading. It's helpfull when you deal with the huge large data source, or some kind of huge file and we want to read it. We could wait untill all of it's been read and then do something with it that could take a long time OR we could pass the data a bit at a time through a stream and this way small chuck of data are packaged up into what's known as a BUFFER(a package of data) and sent down the stream  every time the buffer fills so every time we get a new chuck of data from the buffer we can start using it.

// there is a couple of streams to know: read stream(to read data) and write stream(to write data).
const fs = require("fs");

// createReadStream() takes: path - where we want to read data from, second optional arg. which is an object, inside we could specify the encoding and set that to be utf8, meaning it's going to encode this as it comes and it will automatically be in the readable format. Now, we no longer have to say toString()
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
//here .on - this is an event listener, this time we're listening to a data event on this readStream. That is basically every time we receive a buffer of data from this stream.
//Every time we get a chunk of data that we can use from the stream we fire that callback function and we get access to that chunk of data.
// readStream.on("data", (chunk) => {
//   console.log("---NEW CHUNK----");
//   console.log(chunk);
// });

//creatWriteStream() - where we write data to a file a bit at a time.

//inside this method: first we need to say what file we want to write to
const writeStream = fs.createWriteStream("./docs/blog4.txt");
readStream.on("data", (chunk) => {
  console.log("---NEW CHUNK----");
  console.log(chunk);
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});
