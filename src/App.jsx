import guvi from './assets/guvi.jpg';

const App = () => {
  return (
    <div>
      <h2>Hello, Guvi!!</h2>
      <img
        src={guvi}
        alt="guvi" 
        width="100%"
      />
    </div>
  )
}

export default App;