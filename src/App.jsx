import { createContext, useEffect, useState } from 'react';
import C1 from './components/C1';
import C2 from './components/C2';

// create a context
export const CoinContext = createContext();

const App = () => {

  const [coins, setCoins] = useState([25, 30, 45, 60, 75]);

  useEffect(() => {
    console.log(coins);
  }, [coins]);

  return (
    <div>
      <CoinContext.Provider value={{ coins, setCoins }}>
        <C1 />
        <C2 />
      </CoinContext.Provider>
    </div>
  )
}

export default App;