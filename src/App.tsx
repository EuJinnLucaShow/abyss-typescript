import { useState } from "react";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { BackDrop } from "./components/Tree/Tree.styled";

function App() {
  const [serviceCount, setServiceCount] = useState<number>(0);
  const [view, setView] = useState<string>("list view");

  function transitCount(value: number) {
    setServiceCount(serviceCount + value);
  }

  const [zoomValue, setZoomValue] = useState<number>(0);

  function transitZoomValue(value: number) {
    setZoomValue(value);
  }

  function transitView(value: string) {
    setView(value);
  }

  return (
    <BackDrop id="backdrop">
      <Header
        serviceCount={serviceCount}
        transitZoomValue={transitZoomValue}
        transitView={transitView}
      />
      <Main transitCount={transitCount} zoomValue={zoomValue} view={view} />
    </BackDrop>
  );
}

export default App;
