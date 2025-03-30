// Partial :> Make all the fields optionals of given interface or type

interface MyUser {
  name: string;
  id: string;
  email?: string;
}

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    { name: "sam", id: "KASD@#", email: "dontEmail@eamil.com" },
    { name: "Ok" }
  )
);

// Required:> To give the types required

type RequiredMyUser = Required<MyUser>;

// Pick:>

type JustEmailAndName = Pick<MyUser, "email" | "name">;

// Record:> & Omit:>
const mapById = (users: MyUser[]): Record<MyUser["id"], Omit<MyUser, "id">> => {
  // here Record<MyUser["id"] is used to define that it will target that same type is given to it.
  return users.reduce((a, v) => {
    const { id, ...other } = v; // We have destructured it.
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(mapById([{ id: "YTRE", name: "MR.foo" }]));
