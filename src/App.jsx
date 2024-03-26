import './App.css';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <div className='row'>
        <Button />
        <Button />
        <Button />
      </div>

      <div className='row'>
        <Button />
        <Button />
        <Button />
      </div>

      <div className='row'>
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  )
}

export default App;