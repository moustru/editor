import { styled } from "../../styled-system/jsx";
import { PanelItem } from "./PanelItem";

const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 100vh;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
`;

const items = [{ title: "Text" }, { title: "Image" }];

export const Panel = ({ onDragEnd }) => {
  return (
    <PanelWrapper>
      {items.map((item, index) => (
        <PanelItem
          title={item.title}
          key={item.title + index}
          onDragEnd={onDragEnd}
        />
      ))}
    </PanelWrapper>
  );
};
