import "./App.css";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tipPercentages, setTipPercentages] = useState([]);

  function handleReset() {
    setBill(0);
    setTipPercentages((tips) => tips.map((t) => ({ ...t, tip: 0 })));
  }

  function handleSetTip({ id, tip }) {
    setTipPercentages((tips) => [
      ...tips.filter((t) => t.id !== id),
      { id, tip },
    ]);
  }

  return (
    <div className="box">
      <BillInput bill={bill} onSetBill={setBill}></BillInput>
      <SelectPercentage
        id={1}
        tip={tipPercentages.find((t) => t.id === 1)?.tip}
        onSetTip={handleSetTip}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        id={2}
        tip={tipPercentages.find((t) => t.id === 2)?.tip}
        onSetTip={handleSetTip}
      >
        How did your friend like the service?
      </SelectPercentage>
      <Output bill={bill} tips={tipPercentages}></Output>
      <Reset onReset={handleReset}></Reset>
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <span>What was your bill? </span>
      <input
        type="number"
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
      ></input>
    </div>
  );
}

function SelectPercentage({ id, tip, onSetTip, children }) {
  return (
    <div>
      <span>{children} </span>
      <select
        value={tip}
        onChange={(e) => onSetTip({ id, tip: +e.target.value })}
      >
        <option value={0}>🤢 0%</option>
        <option value={5}>😉 5%</option>
        <option value={10}>💲 10%</option>
        <option value={20}>🤑 20%</option>
      </select>
    </div>
  );
}

function Output({ bill, tips }) {
  const tipPercentage = tips.reduce((acc, curr) => acc + curr.tip, 0);
  const tip = (tipPercentage / 100) * bill;

  return (
    <h2>
      You pay {bill + tip}$ ({bill}$ + {tip}$)
    </h2>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
