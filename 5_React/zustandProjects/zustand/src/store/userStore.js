import { create } from "zustand";
import { produce } from "immer";

const initialState = {
  user: {
    id: "user12",
    friends: ["Soumya", "messi", "neymar"],
    profile: {
      name: "John Doe",
      email: "john.doe@example.com",
      address: {
        street: "123 main street",
        city: "Anyto",
        zipCode: "2342",
      },
    },
  },
};

// export const userStore = create((set) => ({
//   ...initialState,
//   updateAddressStreet: (street) =>
//     set((state) => ({
//       user: {
//         ...state.user,
//         profile: {
//           ...state.user.profile,
//           address: {
//             ...state.user.profile.address,
//             street: street,
//           },
//         },
//       },
//     })),
// }));

// with immer you can mutate & avoid the upper method
export const userStore = create((set) => ({
  ...initialState,
  updateAddressStreet: (street) =>
    set(
      produce((state) => {
        state.user.profile.address.street = street;
      })
    ),
}));
