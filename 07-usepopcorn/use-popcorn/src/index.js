import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating maxRating={5} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      size="4rem"
      color="red"
      className="test"
      messages={["Bad", "Okay", "Good", "Great", "Amazing"]}
    />
    <StarRating maxRating={10} defaultRating={4} />
    <Test></Test> */}
  </React.StrictMode>
);
