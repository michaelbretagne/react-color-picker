import React from "react";
import seedPalettes from "./seedPalettes";
import Palette from "./Palette";

function App() {
  return <Palette {...seedPalettes[4]} />;
}

export default App;
