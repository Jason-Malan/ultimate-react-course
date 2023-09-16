import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <div className="step">
        <input
          value={step}
          onChange={(e) => setStep(+e.target.value)}
          type="range"
          min="0"
          max="10"
        />
        <span style={{ marginLeft: "10px" }}>Step: {step}</span>
      </div>

      <div className="count">
        <button className="btn" onClick={() => setCount((c) => c - step)}>
          &minus;
        </button>
        <input
          value={count}
          onChange={(e) => setCount(() => +e.target.value)}
        />
        <button className="btn" onClick={() => setCount((c) => c + step)}>
          &#43;
        </button>
      </div>

      <DateMessage count={count} />

      {(step !== 1 || count !== 0) && (
        <button
          onClick={() => {
            setStep(1);
            setCount(0);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}

function DateMessage({ count }) {
  function AddDays(days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  }

  const dayText = () => (count > 1 || count < -1 ? "days" : "day");

  return (
    <div style={{ marginTop: "10px" }}>
      {count > 0 && `${count} ${dayText()} from today is `}
      {count < 0 && `Today is ${count * -1} ${dayText()} from `}
      {count === 0 && "Today is "}
      {AddDays(count).toDateString()}
    </div>
  );
}
