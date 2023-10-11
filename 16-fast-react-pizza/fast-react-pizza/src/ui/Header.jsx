import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <header>
      <Link to="/">Fast react pizza co.</Link>
      <SearchOrder />
      <p>Jason</p>
    </header>
  );
}
