import React, { useState } from 'react';
import Buttons from './Buttons';
import Input from './Input';

const Calculator = () => {
  const [input, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const calculate = () => {
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
            stack.push(parseFloat(a) + parseFloat(b));
            break;
          case '-':
            stack.push(parseFloat(a) - parseFloat(b));
            break;
          case '*':
            stack.push(parseFloat(a) * parseFloat(b));
            break;
          case '/':
            stack.push(parseFloat(a) / parseFloat(b));
            break;
          default:
        }
      }
    }
    let result = stack.pop();
    setResult(result);
    setInputValue(input + ' = ' + result);
    console.log(result);
  };

  const clearInput = () => {
    setInputValue('');
    setResult('');
  };

  return (
    <div className='container'>
      <div className='calculator'>
        <div className='header-calculator'>
          <h3>Reverse Polish Notation Calculator</h3>
          <div>{result}</div>
        </div>
        <div className='body-calculator'>
          <Input value={input} result={result} changeHandler={changeHandler} />
          <Buttons calculate={calculate} clearInput={clearInput} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
