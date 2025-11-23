function createCounter(init, calls) {
  let current = init; 
  let ans = [];

  for (let i = 0; i < calls.length; i++) {
    if (calls[i] === 'increment') {
      current += 1;
    } else if (calls[i] === 'reset') {
      current = init;
    } else if (calls[i] === 'decrement') {
      current -= 1;
    } 
    ans.push(current);
  }

  return ans;
}
console.log(createCounter(5, ["increment","reset","decrement"])); 
console.log(createCounter(0, ["increment","increment","decrement","reset","reset"]));

