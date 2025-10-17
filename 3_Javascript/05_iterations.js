// for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  //   console.log(element);
}

/**
 *
 *  let i = 0 => This means assigning the value
 *
 *  i <= 10 => This is known as condition, checking
 *
 *  i++ =>  This iterates the value
 *
 *  // Working
 *
 *  The value is assigned then it's goes to condition and then it itrates after itrating, it goes to value that stores the value then again it start's the same proccess, but it will start from condition!
 *
 */

// we can add condition in loops

for (let i = 0; i < 10; i++) {
  const element = i;

  if (element == 5) {
    console.log(`This is the best Number if have ever seen`);
  }
  console.log(element);
}

// nested loop
for (let i = 1; i <= 10; i++) {
  console.log(`Table for ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(i + "*" + j + "= " + i * j);
  }
}

// while

let i = 0;
while (i <= 10) {
  console.log(`THE LOOP IS ${i}`);
  i++;
}

// for loop on array
const quotes = [
  {
    id: 1,
    quote:
      "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
    author: "Rumi",
  },
  {
    id: 2,
    quote:
      "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
    author: "Abdul Kalam",
  },
];

for (let i = 0; i < quotes.length; i++) {
  console.log(quotes[i].quote);
}

// for of

for (quote of quotes) {
  console.log(quote.id);
}

// Higher order array

// ForEach, map, filter

quotes.forEach((quote) => console.log(quote.author));

// Map => This returns new array.

const quoteId = quotes.map((quote) => quote.id);
console.log(quoteId);

// Filter
const filteredQuotes = quotes.filter((quote) => quote.author === "Rumi");
console.log(filteredQuotes);

//chaining
const filteredQuotess = quotes
  .filter((quote) => quote.author === "Rumi")
  .map((i) => i.quote);
console.log(filteredQuotess);

//reduce
const price = [22, 23, 24, 25];

const totalPrice = price.reduce((acc, currVal) => {
  return acc + currVal;
}, 0);

console.log(totalPrice);
