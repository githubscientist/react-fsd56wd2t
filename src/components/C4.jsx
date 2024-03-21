import React from 'react'

const C4 = ({ coins }) => {
  return (
    <div>
      <h1>Total Coins: { coins.reduce((p, c) => p + c) }</h1>
    </div>
  )
}

export default C4