import React from "react";
import { useDrop } from "react-dnd";
import { styled } from "../../styled-system/jsx";
import { RenderText } from "./render/RenderText";

const DropZoneWrapper = styled.div`
  border: 2px dashed;
  height: 150px;
`;

const DropZone = () => {
  return (
    <DropZoneWrapper>
      Чтобы добавить текст, отпустите виджет в этой зоне
    </DropZoneWrapper>
  );
};

type CanvasProps = {
  elements: string[];
};

export const Canvas = ({ elements }: CanvasProps) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "Text",
    drop: () => ({ name: "Canvas" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const renderElements = () => {
    const elementComponents: React.ReactNode[] = [];

    elements.forEach((el) => {
      switch (el) {
        case "text":
        default:
          elementComponents.push(<RenderText />);
          break;
      }
    });

    return elementComponents;
  };

  console.log({ canDrop, isOver });

  const isActive = canDrop && isOver;

  return (
    <div ref={drop}>
      {renderElements()}
      {isActive && <DropZone />}
    </div>
  );
};
