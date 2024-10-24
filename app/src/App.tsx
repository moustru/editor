import { Panel } from "./components/Panel";
import { Canvas } from "./components/Canvas";
import { styled } from "../styled-system/jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect, useState } from "react";

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

function App() {
  const [addedElements, setAddedElements] = useState<string[]>([]);

  const onDragEnd = (type: string) => {
    setAddedElements((prev) => [...prev, type]);
  };

  useEffect(() => {
    console.log(addedElements);
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <AppWrapper>
        <Panel onDragEnd={onDragEnd} />
        <Canvas elements={addedElements} />
      </AppWrapper>
    </DndProvider>
  );
}

export default App;
