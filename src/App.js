import React from "react";
import seedPalettes from "./seedPalettes";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";

function App() {
  return <Palette palette={generatePalette(seedPalettes[1])} />;
}

export default App;
