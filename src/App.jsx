import React, { useState } from 'react';

const App = () => {

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const handleLeftClick = () => {
    setLeft(left + 1);
  }

  const handleRightClick = () => {
    setRight(right + 1);
  }

  return (
    <div>
      <p>{ left } <button onClick={handleLeftClick}>left</button> <button onClick={handleRightClick}>right</button> { right }</p>
    </div>
  )
}

export default App;