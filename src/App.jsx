import React, { useState } from 'react';

const App = () => {

  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  });

  const [allClicks, setAllClicks] = useState([]);

  const handleLeftClick = () => {
    setClicks({
      ...clicks,
      left: clicks.left + 1
    });
    let newAllClicks = allClicks.concat('L');
    setAllClicks(newAllClicks);
  }

  const handleRightClick = () => {
    setClicks({
      ...clicks,
      right: clicks.right + 1
    });
    setAllClicks([...allClicks, 'R']);
  }

  return (
    <div>
      <p>{clicks.left} <button onClick={handleLeftClick}>left</button> <button onClick={handleRightClick}>right</button> {clicks.right}</p>
      <p>{ allClicks.join(' ') }</p>
    </div>
  )
}

export default App;