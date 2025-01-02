function execute(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// exporting mean you're making it public.
// You can use this alternative too:
// module.exports = execute; // This uses require for import.

// For multiple export

// module.exports = { execute, sub };

// OR else you can do this way

export function adding(a, b) {
  return a + b;
} // is used in Module JS format
