// Debounce: When you want to call a function after certain event. for example => you have a search input field, when user finishes typing then only the apis should call.
// 	  Then you can implement dobounce.
// 	  Debounce Function:

function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
function search(query) {
  console.log(`You have typed`, query);
}
let debounceFunction = debounce(search, 1000);
debounceFunction("K");
debounceFunction("Ku");
debounceFunction("Kus");
debounceFunction("Kush");
