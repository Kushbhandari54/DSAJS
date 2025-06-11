import React, { useState, useCallback } from "react";

const Child = React.memo(({ handleClick }) => {
  console.log("👶 Child rendered");
  return <button onClick={handleClick}>Click me</button>;
});

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    console.log("🧠 Button clicked");
  }, []);

  console.log("🔁 App rendered");

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child handleClick={handleClick} />
    </div>
  );
}

// ❓Question:
// If you:

// Load the page (initial render)

// Type 2 letters in the input

// Click the “Increment Count” button once

// How many times will each log be printed?

// "🔁 App rendered" = ?

// "👶 Child rendered" = ?

// "🧠 Button clicked" = ? (only printed if you click child button, optional)

// 🧠 Remember:

// Child is wrapped in React.memo

// handleClick is wrapped in useCallback with empty deps

// ✅ Breakdown:
// Initial Render:
// "🔁 App rendered" → ✅ once

// "👶 Child rendered" → ✅ once

// handleClick is memoized (same function ref every time)

// Typing 2 letters:
// Triggers setText → re-renders the App

// "🔁 App rendered" → ✅ 2 more times

// But:

// Child receives same handleClick reference

// So React.memo prevents child from re-rendering

// "👶 Child rendered" → ❌ not printed

// Clicking “Increment Count”:
// Triggers setCount → another App re-render

// "🔁 App rendered" → ✅ one more time

// handleClick still the same → child still skips render

// Clicking Child Button?
// You didn't click it — so:

// "🧠 Button clicked" → ❌ not printed

// 📊 Final Tally:
// Log	Times Printed
// 🔁 App rendered	✅ 4 times
// 👶 Child rendered	✅ 1 time
// 🧠 Button clicked	❌ 0 times
