import React from 'react';
import Buttons from './Buttons';
import Input from './Input';

const Calculator = () => {
  return (
    <div className='container'>
      <div className='calculator'>
        <div className='header-calculator'>
          <h3>Reverse Polish Notation Calculator</h3>
        </div>
        <div className='body-calculator'>
          <Input />
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
