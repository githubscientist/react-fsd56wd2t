import { useState } from 'react';
import './App.css';
import Button from './components/Button';

const App = () => {

  const [value, setValue] = useState(null);

  return (
    <div>
      <div className='row'>
        <Button
          value={value} 
          onClick={() => setValue('X')}
        />
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