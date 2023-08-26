import "./App.css";

import SpaceBar from "./assets/spacebarlogo.svg";

function App() {
  return (
    <div className="app">
      <h1 className="main-title">SpaceBar Clicker</h1>
      <div className="spacebar-container">
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
        <p id="Highscore">594</p>
      </div>
    </div>
  );
}

export default App;
