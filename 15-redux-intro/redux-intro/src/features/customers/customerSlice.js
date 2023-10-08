const initialCustomerState = {
  fullName: "",
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
        fullName: payload.fullName,
        nationalID: payload.nationalID,
        createdAt: payload.createdAt,
      };
    case "customer/updateCustomerFullName":
      return {
        ...state,
        fullName: payload,
      };
    default:
      return state;
  }
}

export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

export function updateCustomerFullName(fullName) {
  return {
    type: "customer/updateCustomerFullName",
    payload: fullName,
  };
}
