import { useState } from "react";

// Importation des function de power-up
import { Multiplier, autoClick } from "../modules/powerUpFunctionHandler";

interface PowerUpProps {
  title: string;
  desc: string;
  initialCost: number;
  inflation: number;
  playerScore: number;
  setMultiplier?: any;
  setPlayerScore: any;
  actionName: string;
  errorMessageFunc: any;
}

const PowerUp: React.FC<PowerUpProps> = ({
  title,
  desc,
  initialCost,
  inflation,
  playerScore,
  setPlayerScore,
  setMultiplier,
  actionName,
  errorMessageFunc
}) => {
  const [cost, setCost] = useState<number>(initialCost);
  const [bought, setBought] = useState<number>(0);

  function actionSelect() {
    switch (actionName) {
      case "Multiplier":
        return Multiplier(setMultiplier);
      case "Auto-Click":
        return autoClick();
      default:
        break;
    }
  }

  function buyHandler() {
    if (playerScore >= cost) {
      setPlayerScore((prev: number) => (prev -= cost));
      actionSelect();
      setCost((prev: number) => (prev += inflation));
      setBought((prev: number) => (prev += 1));
    } else {
      errorMessageFunc()
    }
  }

  return (
    <div className="powerUp" onClick={buyHandler}>
      <h3 className="powerUp-title">{title}</h3>
      <p>{desc}</p>
      <p>Cout : {cost}</p>
      <p>Acheté : {bought}</p>
    </div>
  );
};

export default PowerUp;
