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
    errors.push('Первое число не указаано');
  }



  if (!operator.length) {
  errors.push('Не введён знак');
  } else {
    let isOperation =
      (operator === '*') ||
      (operator === '/') ||
      (operator === '+') ||
      (operator === '-')
    if (!isOperation) {
      errors.push('Программа не поддерживает такую операцию');
    }
  }

  if (!numberTwoStr.length) {
    errors.push('Второе число не указаано');
  }

  const numberTwo = Number(numberTwoStr);
  const numberOne = Number(numberOneStr);
  const isNumberInValid = isNaN(numberOne) || isNaN(numberTwo);
  if (isNumberInValid) {
    errors.push('Некорректный ввод чисел');
  }

  if (operator === '/') {
    if (numberTwo === 0) {
      errors.push('Операция некорректна');
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