import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.firstName);

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
