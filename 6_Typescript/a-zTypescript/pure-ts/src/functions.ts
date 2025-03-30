function addNumbers(a: number, b: number): number {
  return a + b;
}

const ex1 = addNumbers(3, 5);
console.log(ex1);

// How to add defualt param and use arrow function in TS
const addStrings = (str1: string, str2: string = "Something"): string =>
  `${str1} ${str2}`;
console.log(addStrings("soumya", "das"));

// Union Type
const newAddStrings = (
  str1: string,
  str2: string | number = "Something" // This
): string => `${str1} ${str2}`;
console.log(newAddStrings("soumya", 4));

// void return type

const printAddNewStrings = (str1: string, str2: string | number): void => {
  console.log(newAddStrings(str1, str2));
};

printAddNewStrings("soumya", 5);

// Promise return type
const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data is Fetched ${url}`);

console.log(fetchData("Jaau"));

// ...rest
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

console.log(introduce("XYZ", "Jaau", "soumya", "das"));
