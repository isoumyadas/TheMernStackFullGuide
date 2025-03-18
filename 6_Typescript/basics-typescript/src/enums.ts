// Enums (short for enumerations) in TS are a feature that allows you to define a set of named constants.

// 1st method
// type KeyInput = "up" | "down" | "right";
// function doSomething(keyPressed: KeyInput) {}

// 2nd enum method

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// function doSomething(keyPressed: Direction) {
//   if (keyPressed == Direction.Up) return "UP";
// }

// doSomething(Direction.Up);
// doSomething(Direction.Down);
// console.log(Direction.Down);

// What if you want to add your values to enums?

enum Direction {
  Up = "upped",
  Down = "downed",
  Left = "lefted",
  Right = "rightwing",
}

function doSomething(keyPressed: Direction) {
  if (keyPressed == Direction.Up) return "UP";
}

doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Down);

// Common use case in Express.js

// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })
