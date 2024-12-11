// ^ Abstraction hides complex implementation details and shows only the essential features of an object.

// ^ Purpose:

// ^ Simplify complex systems.
// ^ Focus on "what" an object does instead of "how" it does it.
// ^ Reduce code duplication and increase clarity.

//code::

class Appliance {
  // Abstract methods (methods without implementation)
  turnOn() {
    throw new Error("Method 'turnOn()' must be implemented.");
  }

  turnOff() {
    throw new Error("Method 'turnOff()' must be implemented.");
  }
}

class WashingMachine extends Appliance {
  turnOn() {
    console.log("Washing machine is now ON.");
  }

  turnOff() {
    console.log("Washing machine is now OFF.");
  }
}

class Refrigerator extends Appliance {
  turnOn() {
    console.log("Refrigerator is now ON.");
  }

  turnOff() {
    console.log("Refrigerator is now OFF.");
  }
}

const wm = new WashingMachine();
wm.turnOn(); // Output: Washing machine is now ON.
wm.turnOff(); // Output: Washing machine is now OFF.

const fridge = new Refrigerator();
fridge.turnOn(); // Output: Refrigerator is now ON.
fridge.turnOff(); // Output: Refrigerator is now OFF.

// ^ Here, Appliance provides an abstract interface (turnOn, turnOff). Subclasses (WashingMachine, Refrigerator) implement the specific behavior.

// Key Takeaways:

// ^ Abstract classes or methods outline expected behavior.
// ^ Concrete classes implement the actual details, adhering to the abstract contract.
