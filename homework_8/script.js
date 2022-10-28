'use strict'

let oneNumberNode = document.getElementById("data-js-number1");
let operatorNode = document.getElementById("data-js-operator")
let twoNumberNode = document.getElementById("data-js-number2");
let result = document.getElementById("result");
let resultErorr = document.getElementById("resultErorr");

function func() {

  let numberOneStr = oneNumberNode.value.trim();
  let numberTwoStr = twoNumberNode.value.trim();
  let operator = operatorNode.value.trim();






  let isNumberOneEmpty = numberOneStr === '';
  if (isNumberOneEmpty) {
    alert ('нет 1го операнда');
    return;
  }

  let isNumberOneInValid = isNaN(numberOneStr);
  if (isNumberOneInValid) {
    alert ('операнд 1 не корректен');
    return;
  }

  let isNumberTwoEmpty = numberTwoStr === '';
  if (isNumberTwoEmpty) {
    alert ('нет 2го операнда');
    return;
  }

  let isNumberTwoInValid = isNaN(numberTwoStr);
  if (isNumberTwoInValid) {
    alert ('операнд 2 не корректен');
    return;
  }


    let operatorEmpty = operator === '';
  if (operatorEmpty) {
    alert('нет знака')
    return;
  }

  let isOperation =
    (operator === '*') ||
    (operator === '/') ||
    (operator === '+') ||
    (operator === '-')
  if (!isOperation)
  {
    alert('знак не верный');
    return;
  }

  let numberOne = Number(numberOneStr);
  let numberTwo = Number(numberTwoStr);

  console.log(numberOne);
  console.log(numberTwo);

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
      if (numberTwo === 0) {
        alert('На ноль делить нельзя');
        return;
      } else {
        result = numberOne / numberTwo;
      }
    break;

  }

  document.getElementById("result").innerHTML = result;
}