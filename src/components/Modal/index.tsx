import { FC } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { Transition } from "react-transition-group";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000099;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s;
  opacity: ${(p: { state: string }) => (p.state === "entered" ? "1" : "0")};
`;

const ModalContainer = styled.div`
  background: linear-gradient(
      279.69deg,
      rgba(112, 152, 225, 0.11) 6.12%,
      rgba(135, 168, 227, 0.33) 54.37%,
      rgba(112, 152, 225, 0.11) 85.5%
    ),
    linear-gradient(
      113.8deg,
      rgba(255, 255, 255, 0.56) 31.72%,
      rgba(255, 255, 255, 0.14) 127.82%
    );
  backdrop-filter: blur(100px);
  border-radius: 33px;
  transition: 0.2s;
  position: absolute;
  top: 50%;
  left: 50%;
  ${(p: { state: string }) => {
    switch (p.state) {
      case "entered":
        return `
          transform: translateY(0);
          opacity: 1;
          `;
      case "exiting":
        return `
          transform: translateY(-300px);
          opacity: 0;
          `;
      default:
        return `
          transform: translateY(300px);
          opacity: 0;
          `;
    }
  }}
`;

export const Modal: FC<Props> = ({ isOpen, children, onClose }) => {
  return (
    <Transition
      timeout={{ enter: 0, exit: 300 }}
      appear={true}
      unmountOnExit={true}
      in={isOpen}
    >
      {(state: string) => {
        return (
          <>
            {ReactDOM.createPortal(
              <>
                <Backdrop state={state} onClick={onClose} />
                <ModalContainer state={state}>{children}</ModalContainer>
              </>,
              document.getElementById("modals")!,
            )}
          </>
        );
      }}
    </Transition>
  );
};
