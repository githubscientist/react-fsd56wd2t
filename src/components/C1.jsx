import React from 'react';
import C3 from './C3';
import C4 from './C4';

const C1 = ({ coins }) => {
  return (
    <div>
      <C3 />
      <C4 
        coins={coins}
      />
    </div>
  )
}

export default C1