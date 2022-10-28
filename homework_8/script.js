'use strict'

let oneNumberNode = document.getElementById("data-js-number1");
let operatorNode = document.getElementById("data-js-operator")
let twoNumberNode = document.getElementById("data-js-number2");
let result = document.getElementById("result");
let resultErorr = document.getElementById("resultErorr");

function func() {

  let numberOne = oneNumberNode.value.trim();
  let numberTwo = twoNumberNode.value.trim();
  let operator = operatorNode.value.trim();

  console.log(numberOne);
  console.log(numberTwo);


  let isNumberOneEmpty = numberOne === '';
  if (isNumberOneEmpty) {
    alert ('нет 1го операнда');
    return;
  }

  let isNumberOneInValid = isNaN(numberOne);
  let isNumberTwoInValid = isNaN(numberTwo);
  let  isNumberInValid = isNumberOneInValid || isNumberTwoInValid
  if (isNumberInValid) {
    alert ('числа(о) не корректные(ое)');
    return;
  }

  let isNumberTwoEmpty = numberTwo === '';
  if (isNumberTwoEmpty) {
    alert ('нет 2го операнда');
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

 console.log(numberOne);
  console.log(numberTwo);


  switch (operator) {
    case '+':
      result = Number(numberOne) + Number(numberTwo);
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