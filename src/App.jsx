import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';

const App = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  useEffect(() => {
    console.log(squares);
  }, [squares]);

  const handleClick = (index) => {
    // if the index box is already filled or there is a winner, then return
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    // take the copy of the squares array
    const squaresCopy = [...squares];


    if (isXNext) {
      squaresCopy[index] = 'X';
    } else {
      squaresCopy[index] = 'O';
    }

    // set the squares array with the updated copy
    setSquares(squaresCopy);
    setIsXNext(!isXNext);
  }

  const calculateWinner = (squares) => {
    const winningLines = [
      [0, 1, 2], // horizontal
      [3, 4, 5], // horizontal
      [6, 7, 8], // horizontal
      [0, 3, 6], // vertical
      [1, 4, 7], // vertical
      [2, 5, 8], // vertical
      [0, 4, 8], // diagonal
      [2, 4, 6]  // diagonal
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  let winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  return (
    <div>
      <div>
        <h1>{status}</h1>
      </div>
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