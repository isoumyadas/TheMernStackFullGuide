class Doggy {
  constructor(public readonly name: string, public readonly age: number) {}
}

class DogList {
  private doggies: Doggy[] = [];

  static instance: DogList = new DogList(); // only access this.s

  private constructor() {}
}

DogList.instance;
