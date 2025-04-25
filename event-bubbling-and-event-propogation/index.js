// Event Capaturing when we pass true

document.getElementById("grandParent").addEventListener(
  "click",
  () => {
    console.log("Grand parent div clicked");
  },
  true
);

document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent div clicked");
  },
  true
);

document.getElementById("child").addEventListener(
  "click",
  (e) => {
    console.log("Child div clicked");
  },
  true
);
