function App() {
  const [count, setCount] = useState(0);

  console.log("🔁 App rendered");

  useEffect(() => {
    console.log("📦 useEffect - count changed");
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Question:
// If you click the button twice, what will be the output?

// "🔁 App rendered" = ? times

// "📦 useEffect - count changed" = ? times

// Final Answer:
// "App rendered" → 3 times

// "useEffect - count changed" → 3 times
