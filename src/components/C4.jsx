import React, { useContext } from 'react';
import { CoinContext } from '../App';

const C4 = () => {

  const { coins, setCoins } = useContext(CoinContext);

  const handleIncrement = () => {
    setCoins([...coins, 1]);
  }

  return (
    <div>
      <h1>Total Coins: {coins.reduce((p, c) => p + c)}</h1>
      <button onClick={handleIncrement}>Increment Coins</button>
    </div>
  )
}

export default C4;