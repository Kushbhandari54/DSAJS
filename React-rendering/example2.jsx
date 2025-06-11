function App() {
  const [count, setCount] = useState(0);

  console.log("🔁 App rendered");

  useEffect(() => {
    console.log("📦 useEffect called");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

//  Question:
// If you click the button twice, how many times will each log be printed?

// "🔁 App rendered" = ? times

// "📦 useEffect called" = ? times

// Output Recap:
// "🔁 App rendered"

// Printed 3 times

// Initial render

// 1st click → count = 1

// 2nd click → count = 2

// "📦 useEffect called"

// Printed 1 time

// Only on initial render because of [] (empty dependency array)
