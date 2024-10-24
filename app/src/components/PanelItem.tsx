import { useDrag } from "react-dnd";
import { styled } from "../../styled-system/jsx";

const PanelItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  border: 2px solid;
  cursor: pointer;
  user-select: none;
`;

type PanelItemProps = {
  title: string;
  onDragEnd: (type: string) => void;
};

export const PanelItem = ({ title, onDragEnd }: PanelItemProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: title,
    item: { title },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onDragEnd(title);
        console.log(`You dropped ${item.title} into ${dropResult.name}`);
      }
    },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 0.5 : 1;

  return (
    <PanelItemWrapper ref={drag} style={{ opacity }}>
      {title}
    </PanelItemWrapper>
  );
};
