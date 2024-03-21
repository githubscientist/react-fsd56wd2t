import { useState } from 'react';
import C1 from './components/C1';
import C2 from './components/C2';

const App = () => {

  const [coins, setCoins] = useState([25, 30, 45, 60, 75]);

  return (
    <div>
      <C1 
        coins={coins}
      />
      <C2 />
    </div>
  )
}

export default App;