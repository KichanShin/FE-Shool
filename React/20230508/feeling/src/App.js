import { useState } from "react";
import MenuList from "./components/MenuList/MenuList";
import DisplayMood from "./components/DisplayMood/DisplayMood";

function App() {
  const [currentMood, setCurrentMood] = useState("");

  return (
    <div>
      <MenuList mood={currentMood} onItemClick={setCurrentMood} />
      <DisplayMood mood={currentMood} />
    </div>
  );
}
export default App;
