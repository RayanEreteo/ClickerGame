import { useState, useEffect } from "react";
import "./App.css";

import SpaceBar from "./assets/spacebarlogo.svg";
import PowerUp from "./components/PowerUp";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [score, setScore] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(1);
  const [criticalHitRate, setCriticalHitRate] = useState<number>(0);
  const [spaceBarPressed, setSpaceBarPressed] = useState<boolean>(false);
  const [errorShown, setErrorShown] = useState<boolean>(false);
  const [playAnimation, setPlayAnimation] = useState<boolean>(false)

  function addScore(multiplier: any) {
    setScore((prev) => prev + 1 * multiplier);
    if (Math.floor(Math.random() * 100) < criticalHitRate) {
      setScore((prev) => (prev += 600));
    }
  }

  const handleKeyDown = (event: any) => {
    setPlayAnimation(true)
    if (event.key === " " && !spaceBarPressed) {
      setSpaceBarPressed(true);
      addScore(multiplier);
    }
  }

  const handleKeyUp = (event: any) => {
    setPlayAnimation(false)
    if (event.key === " ") {
      setSpaceBarPressed(false);
    }
  }

  function showError() {
    const errorMessage = document.getElementById("error-message-container")!;

    if (!errorShown) {
      setErrorShown(true);
      errorMessage.style.visibility = "visible";

      setTimeout(() => {
        errorMessage.style.visibility = "hidden";
        setErrorShown(false);
      }, 2000);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [multiplier, spaceBarPressed]);

  return (
    <div className="app">
      <h1 className="main-title">Spacebar-Clicker</h1>
      <div className={playAnimation ? "spacebar-container-reversed" : "spacebar-container"} onClick={() => addScore(multiplier)}>
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
          desc="Multiplier le score que vous gagner à chaque pression de la barre espace."
          initialCost={40}
          inflation={70}
          playerScore={score}
          setPlayerScore={setScore}
          setMultiplier={setMultiplier}
          setCriticalHitRate={setCriticalHitRate}
          actionName="Multiplier"
          errorMessageFunc={showError}
        />
        <PowerUp
          title="Auto-Click"
          desc="Votre score augmente automatiquement. Chaque achat diminue le délai de l'auto-click."
          initialCost={120}
          inflation={100}
          playerScore={score}
          setPlayerScore={setScore}
          setCriticalHitRate={setCriticalHitRate}
          actionName="Auto-Click"
          errorMessageFunc={showError}
        />
        <PowerUp
          title="Taux Critique"
          desc="Augmente les chances d'obtenir un clic critique. Les clics critiques peuvent être obtenue uniquement en clic manuel."
          initialCost={30}
          inflation={55}
          playerScore={score}
          setPlayerScore={setScore}
          setCriticalHitRate={setCriticalHitRate}
          actionName="CriticalHit"
          errorMessageFunc={showError}
        />
      </div>
      <ErrorMessage message="Vous n'avez pas assez de points !" />
    </div>
  );
}

export default App;
