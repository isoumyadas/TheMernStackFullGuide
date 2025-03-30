interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

type FetchPokemonResults<T> = T extends undefined // If T is undefined, return a Promise
  ? Promise<PokemonResults>
  : void;

function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(
  url: string,
  cb?: T
): FetchPokemonResults<T> {
  if (cb) {
    fetch(url)
      .then((data) => data.json())
      .then(cb);
    return undefined as FetchPokemonResults<T>;
  } else {
    return fetch(url).then((data) => data.json()) as FetchPokemonResults<T>;
  }
}

fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10", (data) => {
  data.results.forEach((pokemon) => console.log(pokemon.name));
});

// async function

(async function () {
  // Type corecion
  const data = <PokemonResults>(
    await fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10")
  );
  data.results.forEach((pokemon) => console.log(pokemon.url));
})();

// Using function overloading:

function fetchPokimons(url: string, cb: (data: PokemonResults) => void): void;
function fetchPokimons(url: string): Promise<PokemonResults>;
function fetchPokimons(url: string, cb?: (data: PokemonResults) => void) {
  if (cb) {
    fetch(url)
      .then((data) => data.json())
      .then(cb);
    return undefined;
  } else {
    return fetch(url).then((data) => data.json());
  }
}
