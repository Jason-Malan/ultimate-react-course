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
  const [count, setCounter] = useState(1);

  function handleStepPrevious() {
    setStep((s) => s - 1);
  }

  function handleStepNext() {
    setStep((s) => s + 1);
  }

  function handleCountPrevious() {
    setCounter((c) => c - step);
  }
  function handleCountNext() {
    setCounter((c) => c + step);
  }

  return (
    <div className="counter">
      <div className="step">
        <button className="btn" onClick={handleStepPrevious}>
          &minus;
        </button>
        <span>Step: {step}</span>
        <button className="btn" onClick={handleStepNext}>
          &#43;
        </button>
      </div>

      <div className="count">
        <button className="btn" onClick={handleCountPrevious}>
          &minus;
        </button>
        <span>Count: {count}</span>
        <button className="btn" onClick={handleCountNext}>
          &#43;
        </button>
      </div>

      <DateMessage count={count} />
    </div>
  );
}

function DateMessage({ count }) {
  const currentDate = new Date();
  const [date, setDate] = useState(new Date());

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
