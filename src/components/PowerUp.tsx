import { useRef } from 'react';
import { useState } from 'react';

// Importation des function de power-up
import { Multiplier, autoClick } from '../modules/powerUpFunctionHandler';

interface PowerUpProps {
  title: string;
  desc: string;
  initialCost: number;
  inflation: number;
  playerScore: number;
  setMultiplier?: any;
  setPlayerScore: any;
  actionName: string;

}

const PowerUp: React.FC<PowerUpProps> = ({ title, desc, initialCost, inflation, playerScore, setPlayerScore, setMultiplier,actionName}) => {
  const buttonRef = useRef<any>(null)
  const [cost, setCost] = useState<number>(initialCost)

  function actionSelect(){
    switch (actionName) {
      case "Multiplier":
        return Multiplier(setMultiplier)
      case "Auto-Click":
        return autoClick
      default:
        break;
    }
  }


  function buyHandler(){
    buttonRef.current.blur()
    if (playerScore >= cost) {
      setPlayerScore((prev: number) => prev -= cost)
      actionSelect()
      setCost((prev: number) => prev += inflation)
    }
  }

  return (
    <div className="powerUp">
      <h3 className="powerUp-title">{title}</h3>
      <p>{desc}</p>
      <button onClick={buyHandler} ref={buttonRef}>Activate</button>
      <p>Cout : {cost}</p>
    </div>
  );
};

export default PowerUp;
