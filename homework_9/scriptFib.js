function makeFibonacciFunction() {
  let a = 0;
  let b = 1;

  return () => {
    const aA = a;
    const bB = b;

    console.log(a) // начало как положено с 0

    const c = aA + bB;
    a = bB;
    b = c;

    // console.log(a) начало как как в ДЗ с 1

    return b;
  }
}
//буквеное название переменных использовано по причини формул и недоступности в глобальной области видимости.
const fibonacci = makeFibonacciFunction();


fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();



