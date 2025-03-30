function printIngredient(quantity: string, ingredient: string, extra?: string) {
  // Not to give anything required after an optional
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ""}`);
}

printIngredient("1C", "Flour");
printIngredient("1C", "Flour", "something more");

// Optionals fields

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!; // Only put ! if you know that it will not a null or undefined.
  }

  return "";
}

// Use this most often
function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

// Optional function calls
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  if (callback) callback();

  // OR

  callback?.();
}
