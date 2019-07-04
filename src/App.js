import React from "react";
import seedPalettes from "./seedPalettes";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";

function App() {
  return <Palette palette={generatePalette(seedPalettes[0])} />;
}

export default App;
