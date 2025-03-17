// All you need to do is put [] annotation next to the type.

// Given an array of positive integers as input, return the maximum value in the array

type NumberArr = number[]; // This is take number of arrays NO strings or any other type

function maxValue(arr: NumberArr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxValue([1, 2, 3]));

//2

interface Userk {
  firstName: string;
  lastName: string;
  age: number;
}

function filteredUsers(users: Userk[]) {
  return users.filter((x) => x.age >= 18);
}

console.log(
  filteredUsers([
    {
      firstName: "harkirat",
      lastName: "Singh",
      age: 21,
    },
    {
      firstName: "Raman",
      lastName: "Singh",
      age: 16,
    },
  ])
);

/*

    try {
    throw new Error("ij")
    } catch(e: any) {
     
    }

*/

// Tuple

function p(): [number, number] {
  return [2, 3];
}

console.log(p());
