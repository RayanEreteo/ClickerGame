import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

interface PowerUpProps {
  title: string;
  desc: string;
  initialCost: number;
  playerScore: number;
  setPlayerScore: any;
  action: () => void;
}

const PowerUp: React.FC<PowerUpProps> = ({ title, desc, initialCost, playerScore, setPlayerScore,action }) => {
  const buttonRef = useRef<any>(null)
  const [cost, setCost] = useState<number>(initialCost)

  function buyHandler(){
    buttonRef.current.blur()
    if (playerScore >= cost) {
      setPlayerScore((prev: number) => prev -= cost)
      action()
      setCost((prev: number) => prev += 50)
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
