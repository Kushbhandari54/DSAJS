// Async Generators and Streams are used to handle large amounts of asynchronous data efficiently,
//  without loading everything into memory at once.

// Async Generators

// Async Generators is a function that :
// 1) Uses async function* syntax.
// 2) Uses yield to produce values one at a Time;
// 3) Uses await inside for asynchronous operations.

// Example: Fetching Data in Chunks

async function* fetchData() {
  yield "Chunk 1";
  await new Promise((res) => setTimeout(res, 1000));
  yield "Chunk 2";
  await new Promise((res) => setTimeout(res, 1000));
  yield "Chunk 3";
}

(async () => {
  for await (const chunk of fetchData()) {
    console.log(chunk);
  }
})();
