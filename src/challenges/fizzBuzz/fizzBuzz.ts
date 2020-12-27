
function fizzBuzz(num:number): string {
  
  const fizz = num % 3 === 0 ? 'Fizz': '';
  const buzz = num % 5 === 0 ? 'Buzz': '';

  if(fizz || buzz) {
    return `${fizz}${buzz}`;
  }

  return `${num}`;
}

export default fizzBuzz;