const App = () => {

  let count = 0;

  const increment = () => {
    count++;
    console.log(count);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App;