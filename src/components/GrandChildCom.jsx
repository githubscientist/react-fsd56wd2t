const GrandChildCom = ({ count, setCount }) => {
  return (
    <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default GrandChildCom;