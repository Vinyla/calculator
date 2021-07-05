import React, { useState } from 'react';
import Buttons from './Buttons';
import Input from './Input';

const Calculator = () => {
  const [input, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  let numbers = isNaN;
  let operands = ['+', '-', '*', '/'];

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    setErrorMessage(false);
  };

  const calculate = () => {
    let expr = input.split(',');
    let stack = [];
    let symbols = [];

    for (let i = 0; i < expr.length; i++) {
      if (!numbers(expr[i])) {
        stack.push(expr[i]);
      } else if (operands) {
        symbols.push(expr[i]);
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
    setInputValue(`${input} = ${solution}`);
    if (input === '') {
      setErrorMessage('You did not enter anything!');
      setInputValue(input);
    } else if (input.match(/[a-z]/)) {
      setErrorMessage('Only numbers and aritmetic operators are valid!');
      setInputValue(input);
    }
    // if (symbols.length >= stack.length) {
    //   setErrorMessage('Something went wrong! Check number of OPERATORS!');
    //   setInputValue(input);
    // } else {
    //   setErrorMessage('Something went wrong! Check the number of OPERANDS!');
    // }
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
