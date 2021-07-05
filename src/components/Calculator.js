import React, { useState } from 'react';
import Buttons from './Buttons';
import Input from './Input';

const Calculator = () => {
  const [input, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  let operands = ['+', '-', '*', '/'];

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    setErrorMessage(false);
  };

  const containsOperation = (str, operations) => {
    for (let i = 0; i < operations.length; i++) {
      let operation = operations[i];
      if (str.indexOf(operation) > -1) {
        return true;
      }
    }
    return false
  }

  const calculate = () => {
    let expr = input.split(',');
    let stack = [];
    let numbers = [];
    let operations = [];
    for (let i = 0; i < expr.length; i++) {
      if (!containsOperation(expr[i], ["+", "-", "*", "/"])) {
        numbers.push(parseFloat(expr[i].toString()));
      } else {
        operations.push(expr[i]);
      }
    }
    if (operations.length + 1 === numbers.length) {
      for (let i = 0; i < expr.length; i++) {
        if (!isNaN(expr[i])) {
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
      setInputValue(`${input} = ${solution}`);
      if (input === '') {
        setErrorMessage('You did not enter anything!');
        setInputValue(input);
      } else if (input.match(/[a-z]/)) {
        setErrorMessage('Only numbers and aritmetic operators are valid!');
        setInputValue(input);
      }
    } else if (operations.length >= numbers.length) {
      return setErrorMessage("Something went wrong! Check number of OPERATORS")
    } else {
      setErrorMessage('Something went wrong! Check the number of OPERANDS!');
    }
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
