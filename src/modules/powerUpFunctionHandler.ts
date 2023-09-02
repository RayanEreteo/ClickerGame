let autoClickDelay = 1000
let active = false
let autoClickInterval: NodeJS.Timeout | null = null; // Define an interval variable


function Multiplier(setMultiplier: any){
    setMultiplier((prev: number) => prev + 1)
}

function autoClick(setScore: any) {
    if (active) {
      autoClickDelay -= 50;
      // Clear the previous interval if it exists
      if (autoClickInterval) {
        clearInterval(autoClickInterval);
      }
      // Set up a new interval with the updated delay
      autoClickInterval = setInterval(() => {
        setScore((prev: any) => prev += 1);
      }, autoClickDelay);
    } else {
      active = true;
      // Set up the initial interval
      autoClickInterval = setInterval(() => {
        setScore((prev: any) => prev += 1);
      }, autoClickDelay);
    }
  }
  

export {Multiplier, autoClick}