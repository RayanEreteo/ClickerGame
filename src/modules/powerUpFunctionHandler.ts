// Variables autoclick
let autoClickDelay = 1000;
let autoClickInterval: NodeJS.Timeout | null = null; // Define an interval variable
let autoClickActive: boolean = false;
let autoClickMultiplier: number = 1;

function Multiplier(setMultiplier: any) {
  autoClickMultiplier += 1;
  setMultiplier((prev: number) => prev + 1);
}

function autoClick(setScore: any) {
  if (autoClickActive) {
    autoClickDelay -= 50;
    // Clear the previous interval if it exists
    if (autoClickInterval) {
      clearInterval(autoClickInterval);
    }
    // Set up a new interval with the updated delay
    autoClickInterval = setInterval(() => {
      setScore((prev: any) => (prev += 1 * autoClickMultiplier));
    }, autoClickDelay);
  } else {
    autoClickActive = true;
    // Set up the initial interval
    autoClickInterval = setInterval(() => {
      setScore((prev: any) => (prev += 1 * autoClickMultiplier));
    }, autoClickDelay);
  }
}

function criticalHit(setCriticalHitRate: any) {
  setCriticalHitRate((prev: number) => ++prev)
}

export { Multiplier, autoClick, criticalHit };
