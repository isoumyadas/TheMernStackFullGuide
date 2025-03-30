// Create a nosql style simple in-memory databases

interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

// Persistable mean you can read or write your state from stirng
interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

class InMemoryDatabase implements Database {
  // member var: // Private: only this class can use, Protected: class and its decendents can use, Public
  protected db: Record<string, string> = {}; // Now you cant change it without set function
  get(id: string): string {
    return this.db[id];
  }

  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }

  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB = new InMemoryDatabase();
myDB.set("foo", "bar");
console.log(myDB.get("foo"));

const dbDas = new PersistentMemoryDB();
dbDas.set("Ankar", "baeeeer");
const mydata = dbDas.saveToString();
dbDas.restoreFromString(mydata);
console.log(dbDas.get("Ankar"));

// ====================================================================================================================================================================

// using generic

// Create a nosql style simple in-memory databases

interface Databasee<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

// Persistable mean you can read or write your state from stirng
interface Persistablee {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

class InMemoryDatabasee<T, K extends DBKeyType> implements Databasee<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>; // The "as" keyword in TypeScript is called a Type Assertion. It tells TypeScript to treat a value as a specific type even if TypeScript cannot infer it automatically.
  get(id: K): T {
    return this.db[id];
  }

  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDBB<T, K extends DBKeyType>
  extends InMemoryDatabasee<T, K>
  implements Persistablee
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }

  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const sas = new PersistentMemoryDBB<number, string>(); // here we defined what generic will take as type
sas.set("Rok", 45);
const d = sas.saveToString();
sas.restoreFromString(d);
console.log(sas.get("Rok"));
