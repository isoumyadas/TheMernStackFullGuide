const user1Points = [34, 56, 78];

const user2Points = [90, 45, 36];

const executeIfWinner = () => {
  if (user1Points[0] > user2Points[0]) {
    console.log(`User 1 is winner`);
  } else {
    console.log(`User 2 is winner`);
  }
};

executeIfWinner();

// Note: Below are the operators to use often.
/**
 * conditional & Logical operators
 *
 * 1. <  => smaller than
 * 2. >  => greater than
 * 3. <=  => smaller than and equal to
 * 4. >=  => greater than and euqal to
 * 5. !=  => not equal to
 * 6. ==  => equal to
 * 7. ===  => strict equal to
 * 8. && => and [ Checks if both value is true or not if not then, it will not execute or fall in else block]
 * 9. || => or [ Checks if both of one value gets statisfied, if both of one doesn't get statisfied then it will not execute]
 */

// how to check the if array in empty

const empty = [];

if (empty.length === 0) {
  console.log("Array is empty");
}

// this is how also check the length of an object
const object = {};

if (Object.keys(object).length === 0) {
  console.log("Object is empty");
}

// ternary operator // syntax => condition ? true : false
const x = 10;
const color = x > 10 ? "red" : "blue";
console.log(color);

// swtich case

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Color is not red or blue");
    break;
}
