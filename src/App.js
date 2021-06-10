import { useState } from "react";
import News from "./components/News/News";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [isVertical, setIsVertical] = useState(false)

  const viewVertical = () => {
    setIsVertical(true)
  }
  const viewHorizontal = () => {
    setIsVertical(false)
  }

  return (
    <>
      <SideBar viewVertical={viewVertical} viewHorizontal={viewHorizontal} isVertical={isVertical} />
      <main style={{ paddingLeft: '430px', paddingRight: '39px' }}>
        <News isVertical={isVertical} />
      </main>
    </>
  );
}

export default App;
