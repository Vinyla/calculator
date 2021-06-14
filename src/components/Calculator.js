import React, { useState } from 'react';
import Buttons from './Buttons';
import Input from './Input';

const Calculator = () => {
  const [input, setInputValue] = useState('');

  const inputValue = (e) => {
    setInputValue(e.target.value);
  };

  const calculate = () => {
    console.log('click');
    let expr = input.split(',');
    let stack = [];
    for (let i = 0; i < expr.length; i++) {
      if (!isNaN(expr[i]) && isFinite(expr[i])) {
        stack.push(expr[i]);
      } else if (isNaN(expr[i])) {
        let a = stack.pop();
        let b = stack.pop();
        switch (expr[i]) {
          case '+':
            stack.push(parseInt(a) + parseInt(b));
            break;
          case '-':
            stack.push(parseInt(a) - parseInt(b));
            break;
          case '*':
            stack.push(parseInt(a) * parseInt(b));
            break;
          case '/':
            stack.push(parseInt(a) / parseInt(b));
            break;
          default:
        }
      }
    console.log(stack);
    }
  };

  return (
    <div className='container'>
      <div className='calculator'>
        <div className='header-calculator'>
          <h3>Reverse Polish Notation Calculator</h3>
        </div>
        <div className='body-calculator'>
          <Input value={input} inputValue={inputValue} />
          <Buttons calculate={calculate} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
