import React, { useState, useEffect } from "react";
import "./App.css";

let born = false;

function App() {
  const [growth, setGrowth] = useState(0);
  const [nirvana, setNirvana] = useState(false);

  useEffect(() => {
    if (born) {
      document.title = "nirvana attained";
    }
  }, [nirvana]);

  useEffect(() => {
    console.log("I am born");
  }, []); //the fist time the compnent is rendered becaus of [] at the end

  useEffect(() => {
    born ? console.log("make mistakes and learn") : (born = true);

    if (growth > 70) {
      setNirvana(true);
    }

   return function cleanup(){
console.log("cleanup after mistakes");
   };
  }); // normally it runs on mounting and every update(no [] at he  end), in this case on every update

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
