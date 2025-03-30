// A namespace in TypeScript is a way to group related code together to avoid global scope pollution and prevent naming conflicts. It allows you to encapsulate functions, classes, and interfaces within a named container. DONT use this instead use export to make the duplicate function local instead global

namespace Testing {
  export function simpleStringState<T>(val: T): [() => T, (v: T) => void] {
    let str: T = val;

    return [() => str, (v: T) => (str = v)];
  }
}

const [strGetter, strSetter] = Testing.simpleStringState(1);
console.log(strGetter());
strSetter(4);
console.log(strGetter());

// Overriding inferred generic type

const [str1Getter, str1Setter] = Testing.simpleStringState<string | null>(null);
console.log(str1Getter());
str1Setter("Samm");
console.log(str1Getter());

// ================================================================================================================================================================
// You can make anyting as generic Types, Interfaces, Functions
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  console.log("1:", items);
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item), // already rank has a param of ({hp}) => hp, which use Destructuring and  extracts the hp from item and returns it.
  }));

  console.log("3", ranks);

  console.log(
    "2",
    ranks.sort((a, b) => a.rank - b.rank)
  );
  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}
const pokemon: Pokemon[] = [
  {
    name: "Bulbasaur",
    hp: 20,
  },
  {
    name: "Charmendar",
    hp: 10,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);

// function getSearchProducts<T>(products: T[]): T {
// return products[3] // here the return type should be something from an array.
//}

// How we define arrow function generic: const getMoreSearchProducts = <T>(): => {}

//====================================================================================================================================================================

// Generics challenge
// ForEach

function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  //forEachFunc T is directly related to items: T[] because it represents the type of elements inside the array.
  items.reduce((a, v) => {
    forEachFunc(v);
    return undefined;
  }, undefined);
}

myForEach(["a", "b", "c"], (v) => console.log(`forEach ${v}`));

// Filter

function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), [] as T[]); // as T[] ensures correct type inference for the empty array in reduce.
}

console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8], (v) => v % 2 === 0));

// Map
function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
  return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[]); // as K[] ensures correct type inference for the empty array in reduce.
}

console.log(myMap([1, 2, 3, 4, 5, 6, 7, 8], (v) => (v * 10).toString()));
