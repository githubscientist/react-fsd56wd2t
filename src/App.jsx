import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import WinningLine from './components/WinningLine';

const App = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winningLine, setWinningLine] = useState({
    angle: 0,
    length: 0,
    position: { x: 0, y: 0 }
  });
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    let winner = calculateWinner(squares);
    if (winner) {
      setWinner(winner[0]);
      let angle, length, position;

      if (winner[1] === 0 && winner[2] === 1 && winner[3] === 2) {
        angle = 0;
        length = 200;
        position = { x: 0, y: 110 };
      } else if(winner[1] === 3 && winner[2] === 4 && winner[3] === 5) {
        angle = 0;
        length = 200;
        position = { x: 0, y: 170 };
      } else if(winner[1] === 6 && winner[2] === 7 && winner[3] === 8) {
        angle = 0;
        length = 200;
        position = { x: 0, y: 230 };
      } else if(winner[1] === 0 && winner[2] === 3 && winner[3] === 6) {
        angle = 90;
        length = 200;
        position = { x: -62, y: 170 };
      } else if (winner[1] === 1 && winner[2] === 4 && winner[3] === 7) {
        angle = 90;
        length = 300;
        position = { x: 300, y: 0 };
      } else if (winner[1] === 2 && winner[2] === 5 && winner[3] === 8) {
        angle = 90;
        length = 300;
        position = { x: 500, y: 0 };
      } else if (winner[1] === 0 && winner[2] === 4 && winner[3] === 8) {
        angle = 45;
        length = 400;
        position = { x: 0, y: 0 };
      } else if (winner[1] === 2 && winner[2] === 4 && winner[3] === 6) {
        angle = -45;
        length = 400;
        position = { x: 500, y: 0 };
      } else {
        angle = 0;
        length = 0;
        position = { x: 0, y: 0 };
      }

      setWinningLine({
        angle,
        length,
        position
      });
    }

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
        return [squares[a], a, b, c];
      }
    }

    return null;
  }

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
      <div>
        <button
          onClick={() => {
            setSquares(Array(9).fill(null));
            setIsXNext(true);
            setWinner(null);
            setWinningLine({
              angle: 0,
              length: 0,
              position: { x: 0, y: 0 }
            });
          }}
          className='resetGame'
        >Restart Game</button>
      </div>

      <div>
        <WinningLine 
          winningLine={winningLine}
        />
      </div>
    </div>
  )
}

export default App;