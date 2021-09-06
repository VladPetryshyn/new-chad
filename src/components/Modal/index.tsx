import { FC } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

interface Props {
  isOpen: boolean;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000099;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal: FC<Props> = ({ isOpen, children }) => {
  return isOpen
    ? ReactDOM.createPortal(
        <Container>{children}</Container>,
        document.getElementById("modals")!,
      )
    : null;
};
