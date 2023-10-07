import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, { type, payload }) {
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

const store = createStore(reducer);

store.dispatch(deposit(500));
store.dispatch(withdraw(300));
store.dispatch(requestLoan(10000, "buy a car"));
store.dispatch(payLoan());

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
