function Multiplier(setMultiplier: any){
    setMultiplier((prev: number) => prev + 1)
}

function autoClick(){
    console.log("Test")
}

export {Multiplier, autoClick}