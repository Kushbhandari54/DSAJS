// Streams are used to process large amounts of data in chunks, rather than all at once.
// Best for handling large files, network requests, or real-time data.

// Creating a stream
const { Readable } = require("stream");
const dataStream = new Readable({
  read() {
    this.push("hello, ");
    this.push("this is ");
    this.push("a stream");
    this.push(null); // End of Stream
  },
});

dataStream.on("data", (chunk) => console.log(chunk.toString()));
