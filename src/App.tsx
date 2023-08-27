import { useState, useEffect } from "react";
import "./App.css";

import SpaceBar from "./assets/spacebarlogo.svg";

function App() {
  const [score, setScore] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(1);

  function addScore(multiplier: any) {
    setScore((prev) => prev + 1 * multiplier)
  }

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      console.log("dfdg")
      if (event.key === " ") {
        addScore(multiplier);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="app">
      <h1 className="main-title">SpaceBar Clicker</h1>
      <div className="spacebar-container" onClick={() => addScore(multiplier)}>
        <img
          src={SpaceBar}
          alt="Spacebar"
          width={"150px"}
          style={{
            filter:
              "invert(100%) sepia(0%) saturate(30%) hue-rotate(206deg) brightness(105%) contrast(101%)",
          }}
        />
      </div>
      <div className="highscore-container">
        <p id="Highscore">{score}</p>
      </div>
    </div>
  );
}

export default App;
