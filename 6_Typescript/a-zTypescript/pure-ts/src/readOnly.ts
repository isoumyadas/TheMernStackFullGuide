interface Cat {
  readonly name: string; // You can give it like this
  breed: string;
}

function makeCat(name: string, breed: string): Readonly<Cat> {
  // or like this
  return {
    name,
    breed,
  };
}

const usul = makeCat("Useul", "tabby");
usul.name = "Piter";

// if you want to keep readonly for tuples
function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

// keep as const

const reallyConst = [1, 2, 3] as const;
reallyConst[0] = 50;
