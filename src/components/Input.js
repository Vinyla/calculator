import React from 'react';

const Input = ({ input, changeHandler }) => {
  return (
    <div className='input-container'>
      <input
        value={input}
        onChange={changeHandler}
        placeholder='Enter the operand and operator: 2,6,5.5,4,*,-,+'
      />
    </div>
  );
};
export default Input;
