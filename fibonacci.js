const fib = (n) => {
    let sequence = [0, 1];
  
    while (sequence.length < n) {
      sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1]);
    }
  
    return sequence;
  };
  
  console.log(fib(12));
  
  const fib8 = (n, a = [0, 1]) => {
    if (a.length >= n) return a;
    return fib8(n, [...a, a[a.length - 2] + a[a.length - 1]]);
  };
  
  console.log(fib8(12));
  
  