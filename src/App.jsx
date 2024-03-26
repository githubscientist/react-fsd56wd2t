import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';

const App = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));

  useEffect(() => {
    console.log(squares);
  }, [squares]);

  const handleClick = (index) => {
    console.log(index + ' clicked');
  }

  return (
    <div>
      <div className='row'>
        <Button
          value={squares[0]}
          onClick={() => handleClick(0)}
        />
        <Button
          value={squares[1]}
          onClick={() => handleClick(1)}
        />
        <Button
          value={squares[2]}
          onClick={() => handleClick(2)}
        />
      </div>

      <div className='row'>
        <Button
          value={squares[3]}
          onClick={() => handleClick(3)}
        />
        <Button
          value={squares[4]}
          onClick={() => handleClick(4)}
        />
        <Button
          value={squares[5]}
          onClick={() => handleClick(5)}
        />
      </div>

      <div className='row'>
        <Button
          value={squares[6]}
          onClick={() => handleClick(6)}
        />
        <Button
          value={squares[7]}
          onClick={() => handleClick(7)}
        />
        <Button
          value={squares[8]}
          onClick={() => handleClick(8)}
        />
      </div>
    </div>
  )
}

export default App;