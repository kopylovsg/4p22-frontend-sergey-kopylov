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


  let numberOneVacant = numberOne === ''
  if (numberOneVacant)
  {
    alert ('нет 1го');
    return
  }

  let numberTwoVacant = numberTwo === ''
  if (numberTwoVacant)
  {
    alert ('нет 2го');
    return
  }

  let isNumberOneInValid = isNaN(numberOne);
  let isNumberTwoInValid = isNaN(numberTwo);
  let  isNumberInValid = isNumberOneInValid || isNumberTwoInValid
  if (isNumberInValid)
  {
    alert ('числа не корректные');
    return
  }

  let operatorVacant = operator === ''
  if (operatorVacant)
  {
    alert('нет знака')
    return
  }

  let isOperation =
    (operator === '*') ||
    (operator === '/') ||
    (operator === '+') ||
    (operator === '-')
  if (!isOperation)
  {
    alert('знак не верный')
    return
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
      if (numberTwo) {
        result = numberOne / numberTwo;
      } else {
        alert('Операция некорректна');
      }
      break;
    default:
      alert('Программа не поддерживает такую операцию');
  }


  document.getElementById("result").innerHTML = result;
}