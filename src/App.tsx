import { useState, useEffect } from "react";
import "./App.css";

import SpaceBar from "./assets/spacebarlogo.svg";
import PowerUp from "./components/PowerUp";
import { Multiplier } from "./modules/powerUpFunctionHandler";

function App() {
  const [score, setScore] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(1);

  function addScore(multiplier: any) {
      setScore((prev) => prev + 1 * multiplier);
  }

  const handleKeyDown = (event: any) => {
    if (event.key === " ") {
        addScore(multiplier);
    }
  };
  

  const handleKeyUp = () => {
    // 
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="app">
      <h1 className="main-title">Spacebar-Clicker</h1>
      <div
        className="spacebar-container"
        onClick={() => addScore(multiplier)}
        onMouseUp={handleKeyUp}
      >
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
      <div className="powersUp-container">
        <PowerUp
          title="Multiplicateur"
          desc="Multiplier le score que vous gagner a chaque pression de la barre espace."
          cost={80}
          func={() => Multiplier(setMultiplier)}
        />
      </div>
    </div>
  );
}

export default App;
