// What does function overloading mean?
// Function overloading means defining multiple functions with the same name but different parameters (type, number, or both). It allows a function to behave differently based on the arguments passed.

interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj,
  };
}

function parseCoordinateFromNumbers(y: number, x: number): Coordinate {
  return {
    y,
    x,
  };
}

// ====================================================

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(y: number, x: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value);
    });
  } else if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 35 })); // here it will spread and the term as mean as the spreaded object should contain similar type as Coordinate.
console.log(parseCoordinate("x:12,y:22"));

// =================================================================================================================================================================
