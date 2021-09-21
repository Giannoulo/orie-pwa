import React from "react";
import Header from "./Components/Header";
import Visualizer from "./Components/Visualizer";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <Visualizer />
    </div>
  );
};

export default App;
