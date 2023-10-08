import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, { payload }) {
        state.fullName = payload.fullName;
        state.nationalID = payload.nationalID;
        state.createdAt = payload.createdAt;
      },
    },
    updateName(state, { payload }) {
      state.fullName = payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;

// export function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullName,
//       nationalID,
//       createdAt: new Date().toISOString(),
//     },
//   };
// }

// export function updateCustomerFullName(fullName) {
//   return {
//     type: "customer/updateCustomerFullName",
//     payload: fullName,
//   };
// }

// export default function customerReducer(
//   state = initialCustomerState,
//   { type, payload }
// ) {
//   switch (type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: payload.fullName,
//         nationalID: payload.nationalID,
//         createdAt: payload.createdAt,
//       };
//     case "customer/updateCustomerFullName":
//       return {
//         ...state,
//         fullName: payload,
//       };
//     default:
//       return state;
//   }
// }
