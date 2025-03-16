// Fetch Api Data in chunks

async function* apiDataGenerator() {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/1",
  ];

  for (const url of urls) {
    const response = await fetch(url);
    yield await response.json();
  }
}

(async () => {
  for await (const post of apiDataGenerator()) {
    console.log(post.title);
  }
})();
