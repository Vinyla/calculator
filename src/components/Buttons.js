import React from 'react';

const Buttons = ({ calculate, clearInput }) => {
  return (
    <div className='buttons'>
      <button className='clear' onClick={() => clearInput()}>
        Clear
      </button>
      <button className='compute' onClick={() => calculate()}>
        Compute
      </button>
    </div>
  );
};

export default Buttons;
