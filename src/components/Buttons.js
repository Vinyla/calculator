import React from 'react';

const Buttons = ({ calculate }) => {
  return (
    <div>
      <button>Clear</button>
      <button onClick={calculate}>
        Compute
      </button>
    </div>
  );
};

export default Buttons;