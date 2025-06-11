import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("🔁 App rendered");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

//  Exactly right!

// 🔍 Explanation:
// 1st render: Initial mount → console.log("🔁 App rendered")

// 1st click: setCount(count + 1) → count updates to 1 → re-render

// 2nd click: setCount(count + 1) → count updates to 2 → re-render

// ➡️ Total renders:
// Initial render + 2 re-renders = 3 console logs
