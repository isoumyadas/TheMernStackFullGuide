type Name = {
  first: string;
  last: string;
};

function addFullName(name: Name): Name & { fullname: string } {
  return {
    ...name,
    fullname: `${name.first} ${name.last}`,
  };
}

// to pass any function you can extent it like this:
// ReturnType<Type> is a TypeScript utility type that extracts the return type of a function.
function permuteRows<T extends (...args: any[]) => any>(
  iteratorFunc: T,
  data: Parameters<T>[0][] // Parameters<T> extracts the parameter types of a function T as a tuple.
): ReturnType<T>[] {
  return data.map(iteratorFunc);
}

console.log(permuteRows(addFullName, [{ first: "sam", last: "das" }]));
