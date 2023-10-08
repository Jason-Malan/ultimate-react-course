const initialCustomerState = {
  firstName: "",
  nationalID: "",
  createdAt: "",
};

export default function customerReducer(
  state = initialCustomerState,
  { type, payload }
) {
  switch (type) {
    case "customer/createCustomer":
      return {
        ...state,
        firstName: payload.firstName,
        nationalID: payload.nationalID,
        createdAt: payload.createdAt,
      };
    case "customer/updateCustomerFirstName":
      return {
        ...state,
        firstName: payload,
      };
    default:
      return state;
  }
}

export function createCustomer(firstName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      firstName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

export function updateCustomerFirstName(firstName) {
  return {
    type: "customer/updateCustomerFirstName",
    payload: firstName,
  };
}
