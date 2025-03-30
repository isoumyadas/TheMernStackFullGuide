function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

// Using Types

type MutationFunction = (v: number) => number;

function arrayToMutate(numbers: number[], mutate: MutationFunction): number[] {
  return numbers.map(mutate);
}

console.log(arrayToMutate([1, 2, 3], (v) => v * 10));

// Closures

type AdderFunction = (val: number) => number;

export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
