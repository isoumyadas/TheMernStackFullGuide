type MyFexlibleDogInfo = {
  name: string;
} & Record<string, string>; // to add or merge any other key value pair so it makes it flexible

const dog: MyFexlibleDogInfo = {
  name: "LG",
  breed: "Muutt",
  danker: "no",
};

// same thing wihtout Record
type MyFexlibleDogInfoo = {
  name: string;
  [key: string]: string | number | boolean;
};

interface DogInfo {
  name: string;
  age: number;
}

type OptionsFlags<T> = {
  [Property in keyof T]: null;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

//========================================================================================================================================================================

type Listeners<T> = {
  [Property in keyof T as `on${Capitalize<string & Property>}Change`]?: (
    newValue: T[Property]
  ) => void;
};

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw "Needs to be implemented";
}

const lg: DogInfo = {
  name: "LG",
  age: 13,
};

type DogInfoListeners = Listeners<DogInfo>;

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
});
