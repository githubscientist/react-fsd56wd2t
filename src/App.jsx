import Hello from "./components/Hello"; // import the Hello component
import './App.css'; // import the App.css file

// Creating our first component
const App = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Hello name="React" />
      <Hello name="CSS" />
      <Hello name="HTML" />
      <Hello name="JS" />
    </div>
  )
}

export default App;