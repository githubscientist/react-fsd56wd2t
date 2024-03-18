const Display = ({ counter, setCounter }) => {

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

  return (
    <div>
          <h3>Count: {counter}</h3> 
          <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Display;