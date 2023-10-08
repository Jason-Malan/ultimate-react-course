import { combineReducers, createStore } from "redux";

const initialAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialCustomerState = {
  firstName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialAccountState, { type, payload }) {
  switch (type) {
    case "account/deposit":
      return { ...state, balance: state.balance + payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - payload };
    case "account/requestLoan": {
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + payload.amount,
        loan: payload.amount,
        loanPurpose: payload.purpose,
      };
    }
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function customerReducer(state = initialCustomerState, { type, payload }) {
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

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

store.dispatch(deposit(500));
store.dispatch(withdraw(300));
store.dispatch(requestLoan(10000, "buy a car"));
store.dispatch(payLoan());
console.log(store.getState());

store.dispatch(createCustomer("Jason", "JSA812"));
console.log(store.getState());

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}

function payLoan() {
  return { type: "account/payLoan" };
}

function createCustomer(firstName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      firstName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

function updateCustomerFirstName(firstName) {
  return {
    type: "customer/updateCustomerFirstName",
    payload: firstName,
  };
}
