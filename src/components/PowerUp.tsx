import React from 'react';
import { useState } from 'react';

interface PowerUpProps {
  title: string;
  desc: string;
  cost: number;
  func: () => void;
}

const PowerUp: React.FC<PowerUpProps> = ({ title, desc, cost, func }) => {

  const [canBuy, setCanBuy] = useState(false)

  return (
    <div className="powerUp">
      <h3 className="powerUp-title">{title}</h3>
      <p>{desc}</p>
      <button onClick={func}>Activate</button>
    </div>
  );
};

export default PowerUp;
