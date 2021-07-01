import React, { useState } from 'react';
import Buttons from './Buttons';
import Input from './Input';

const Calculator = () => {
  const [input, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    setErrorMessage(false);
  };

  const calculate = () => {
    let expr = input.split(',');
    let stack = [];
    let numbers = isNaN;
    let operands = ['+', '-', '*', '/'];
    for (let i = 0; i < expr.length; i++) {
      if (!numbers(expr[i]) && isFinite(expr[i])) {
        stack.push(expr[i]);
      } else if (operands) {
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
    let solution = stack.pop();
    if (!input) {
      setErrorMessage('You did not enter anything!');
    } else if (input.match(/[a-z]/)) {
      setErrorMessage('Only numbers and aritmetic operators are valid!');
    } else if (stack.length === 1) {
      setErrorMessage('Something went wrong! Check the number of OPERANDS!');
    }
    // else if () {
    //   setErrorMessage('Something went wrong! Check the number of OPERATORS!');
    // }
    else setInputValue(`${input} = ${solution}`);
  };

  const clearInput = () => {
    setInputValue('');
    setErrorMessage(false);
  };

  return (
    <div className='container'>
      <div className='calculator'>
        <div className='header-calculator'>
          <h3>Reverse Polish Notation Calculator</h3>
        </div>
        <div className='body-calculator'>
          <Input input={input} changeHandler={changeHandler} />
          <Buttons calculate={calculate} clearInput={clearInput} />
        </div>
        <div className={'error-container'}>
          <p>{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
