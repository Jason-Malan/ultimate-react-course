import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">Fast react pizza co.</Link>
      <p>Jason</p>
    </header>
  );
}
