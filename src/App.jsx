// creating a second component: Hello
const Hello = () => {
  return (
    <h1>Hello World!</h1>
  )
} 

// Creating our first component
const App = () => {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App;