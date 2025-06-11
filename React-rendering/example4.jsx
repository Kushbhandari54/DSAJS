function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveValue = useMemo(() => {
    console.log("🔥 expensiveValue recalculated");
    return count * 2;
  }, [count]);

  console.log("🔁 App rendered");

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// ❓Question:
// If you:

// Load the page (initial render)

// Type 2 letters in the input

// Click the Increment button once

// How many times will each of the following be printed?

// "🔁 App rendered" = ?

// "🔥 expensiveValue recalculated" = ?

//  Final Breakdown:
// Initial Render:

// App rendered → ✅ printed

// expensiveValue recalculated → ✅ printed (because count = 0 on first render)

// Typing 2 letters in the input (setText):

// Each keystroke triggers a state change in text, so:

// App rendered → ✅ printed 2 more times

// But count didn’t change → so useMemo does not re-run

// Click Increment (count++):

// App rendered → ✅ printed

// count is updated → useMemo dependency changes → 🔥 expensiveValue recalculated runs again

// 🧮 Totals:
// "🔁 App rendered" = 1 (initial) + 2 (input) + 1 (button click) = 4 times

// "🔥 expensiveValue recalculated" = 1 (initial) + 1 (on count update) = 2 times
