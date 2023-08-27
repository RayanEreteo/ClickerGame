import { useState, useEffect } from "react";
import "./App.css";

import SpaceBar from "./assets/spacebarlogo.svg";

function App() {
  const [score, setScore] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(1);
  const [spaceBarPressed, setSpaceBarPressed] = useState<boolean>(false)

  function addScore(multiplier: any) {
    if(spaceBarPressed == false){
      setScore((prev) => prev + 1 * multiplier)
      setSpaceBarPressed(true)
    }
  }

  const handleKeyDown = (event: any) => {
    if (event.key === " ") {
      if(spaceBarPressed == false){
        addScore(multiplier);
      }
    }
  };

  const handleKeyUp = (() => {
    setSpaceBarPressed(false)
  })

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp)

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [spaceBarPressed]);

  return (
    <div className="app">
      <h1 className="main-title">Spacebar-Clicker</h1>
      <div className="spacebar-container" onClick={() => addScore(multiplier)} onMouseUp={handleKeyUp}>
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