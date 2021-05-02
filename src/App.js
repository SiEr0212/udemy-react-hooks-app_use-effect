import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [growth, setGrowth] = useState(0);

  useEffect(() => {
    console.log("I am born!");
  }, []);

  const growHandle = () => {
    setGrowth(growth + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Use Effect</h2>
        <h3>growth:{growth}</h3>
        <button onClick={growHandle}>learn and grow</button>
      </header>
    </div>
  );
}

export default App;
