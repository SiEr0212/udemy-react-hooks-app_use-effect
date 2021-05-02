import React, { useState, useEffect } from "react";
import "./App.css";

let born = false;

function App() {
  const [growth, setGrowth] = useState(0);

  useEffect(() => {
    console.log("I am born");
  }, []);//the fist time the compnent is rendered becaus of [] at the end

  useEffect(() => {
    console.log("make mistakes and learn");
  });// runs on mounting and every update no [] at he  end

  const growHandle = () => {
    setGrowth(growth + 10);
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
