function makeFibonacciFunction() {
  let a = 0;
  let b = 1;

  return () => {
    const c = a + b;
    a = b;
    b = c;
    console.log(a);
    return;
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



