// abstract mean you can never instanciate directly to class given name (streetFighter)
abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.name} Attack with ${this.getSpecialAttack()}`);
  }
  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return "Hadoken";
  }

  get name(): string {
    return "Ryu";
  }
}

const ryu = new Ryu();
console.log(ryu.getSpecialAttack());
ryu.fight();

// In TypeScript, abstract is used in classes and methods to define a blueprint that must be implemented by subclasses.
// An abstract class cannot be instantiated, and its abstract methods must be overridden in derived classes.
