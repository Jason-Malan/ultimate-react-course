import "./App.css";
import { useEffect, useState } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

const currencies = ["USD", "EUR", "CAD", "INR", "ZAR"];

function App() {
  const [input, setInput] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState(currencies.at(0));
  const [currencyTo, setCurrencyTo] = useState(currencies.at(1));
  const [convertedInput, setConvertedInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fromOptions = currencies.filter((c) => c !== currencyTo);
  const toOptions = currencies.filter((c) => c !== currencyFrom);

  useEffect(() => {
    async function convertCurrency() {
      setIsLoading(true);
      const res = await fetch(
        `http://api.frankfurter.app/latest?amount=${input}&from=${currencyFrom}&to=${currencyTo}`
      );
      const data = await res.json();
      setConvertedInput(data.rates[currencyTo]);
      setIsLoading(false);
    }

    if (input > 0) convertCurrency();
  }, [input, currencyFrom, currencyTo]);

  return (
    <div className="App">
      <input
        value={input}
        onChange={(e) => setInput(+e.target.value)}
        type="text"
        disabled={isLoading}
      />

      <select
        value={currencyFrom}
        onChange={(e) => setCurrencyFrom(e.target.value)}
        disabled={isLoading}
      >
        {fromOptions.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        value={currencyTo}
        onChange={(e) => setCurrencyTo(e.target.value)}
        disabled={isLoading}
      >
        {toOptions.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <p>
        {convertedInput} {currencyTo}
      </p>
    </div>
  );
}

export default App;
