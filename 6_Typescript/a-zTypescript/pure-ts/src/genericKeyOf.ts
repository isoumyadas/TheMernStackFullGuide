function pluck<DataType, KeyType extends keyof DataType>( // here KeyType should take keys from DataType
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: "Mini", age: 13 },
  { name: "LG", age: 12 },
];

console.log(pluck(dogs, "age"));

// Event Map
interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; ProductID: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent("addToCart", {
  ProductID: "123",
  quantity: 3,
  time: 12,
  user: "Sam",
});

sendEvent("checkout", { time: 3, user: "das" });

// In TypeScript, a function signature refers to the function’s name, parameters, and return type. It defines the expected inputs and outputs of a function.
