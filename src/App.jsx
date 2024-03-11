import Hello from "./components/Hello"; // import the Hello component

// Creating our first component
const App = () => {
  return (
    <div>
      <Hello name="React" />
      <Hello name="CSS" />
      <Hello name="HTML" />
      <Hello name="JS" />
    </div>
  )
}

export default App;