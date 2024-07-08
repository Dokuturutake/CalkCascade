export function generateProblem(difficulty: number, selectedOperations: string[]): { problem: string; answer: string } {
  const operations = selectedOperations;
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const max = Math.pow(10, difficulty);
  const num1 = Math.floor(Math.random() * (max - 1) )+ 1;
  const num2 = Math.floor(Math.random() * (max - 1) )+ 1;

  let problem: string;
  let answer: number;
  if (operation === '/') {
    problem = `${(num1 * num2)} ÷ ${num2}`;
    answer = num1;
  } else if (operation === '+') {
    problem = `${num1} + ${num2}`;
    answer = num1 + num2;
  } else if (operation === '-') {
    problem = num1 >= num2 ? `${num1} - ${num2}` : `${num2} - ${num1}`;
    answer = Math.abs(num1 - num2);
  } else {
    problem = `${num1} × ${num2}`;
    answer = num1 * num2;
  }

  return {
    problem,
    answer: answer.toString()
  };
}
