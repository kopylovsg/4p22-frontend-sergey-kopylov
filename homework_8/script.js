'use strict'

const oneNumberNode = document.getElementById("data-js-number1");
const operatorNode = document.getElementById("data-js-operator")
const twoNumberNode = document.getElementById("data-js-number2");

function func() {
  document.getElementById("result").innerHTML = '';
  let result;
  const errors = [];
  const numberOneStr = oneNumberNode.value.trim();
  const numberTwoStr = twoNumberNode.value.trim();
  const operator = operatorNode.value.trim();

  if (!numberOneStr.length) {
    errors.push('нет 1го операнда');
  }

  const numberOne = Number(numberOneStr);
  const isNumberOneInValid = isNaN(numberOne);
  if (isNumberOneInValid) {
    errors.push('операнд 1 не корректен');
  }

  if (!operator.length) {
  errors.push('нет оператора');
  } else {
    let isOperation =
      (operator === '*') ||
      (operator === '/') ||
      (operator === '+') ||
      (operator === '-')
    if (!isOperation) {
      errors.push('оператор не верный');
    }
  }

  if (!numberTwoStr.length) {
    errors.push('нет 2го операнда');
  }

  const numberTwo = Number(numberTwoStr);
  const isNumberTwoInValid = isNaN(numberTwo);
  if (isNumberTwoInValid) {
    errors.push('операнд 2 не корректен');
  }

  if (operator === '/') {
    if (numberTwo === 0) {
      errors.push('на ноль делить нельзя');
    }
  }

  if (errors.length) {
    return alert(errors.join('\n'));
  } else {
    switch (operator) {
      case '+':
        result = numberOne + numberTwo;
        break;
      case '-':
        result = numberOne - numberTwo;
        break;
      case '*':
        result = numberOne * numberTwo;
        break;
      case '/':
        result = numberOne / numberTwo;
        break;
    }
  }

  document.getElementById("result").innerHTML = result;
}