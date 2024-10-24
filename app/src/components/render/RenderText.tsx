import { styled } from "../../../styled-system/jsx";

const RenderTextWrapper = styled.div`
  border: 2px solid;
`;

export const RenderText = () => {
  return <RenderTextWrapper>Привет! Я текст</RenderTextWrapper>;
};
