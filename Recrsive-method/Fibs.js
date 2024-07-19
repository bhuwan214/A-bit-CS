const fibonacci= n => {
    if (n <= 1) 
      return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  function FibsSeries(length) {
    const arr= [];
    for (let i = 0; i < length; i++) {
      arr.push(fibonacci(i));
    }
    return arr;
  }
  
  
  console.log(FibsSeries(0))
  console.log(FibsSeries(1))
  console.log(FibsSeries(2))
  console.log(FibsSeries(5))
  console.log(FibsSeries(10))
  console.log(FibsSeries(15))
  console.log(FibsSeries(20))
  