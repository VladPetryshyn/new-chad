import { useState } from "react";
import styled from "styled-components";
import { CustomTransition } from "@components/CustomTransition";
import { MenuItems } from "./Items";

const Container = styled.div`
  position: fixed;
  right: 0;
`;

const MenuBody = styled.div`
  background: rgba(255, 254, 254, 0.8);
  transition: 0.4s transform;
  width: 35vw;
  height: 100vh;
  position: relative;
  stroke: black;
  overflow: hidden;
  transform: ${(p: { state: string }) => {
    switch (p.state) {
      case "entered":
        return "translateX(0%)";
      default:
        return "translateX(100%)";
    }
  }}};
`;

export const Button = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const Backdrop = styled.div`
  background: linear-gradient(
    113.8deg,
    rgba(255, 255, 255, 0.56) 31.72%,
    rgba(255, 255, 255, 0.14) 127.82%
  );
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 0.5s;
  opacity: ${(p: { state: string }) => (p.state === "entered" ? "1" : "0")};
`;

export const Line = styled.span`
  width: 30px;
  background: black;
  height: 4px;
  display: block;
  margin-top: 4px;
`;
export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen((open) => !open);
  return (
    <Container>
      {!isOpen && (
        <Button onClick={onClose}>
          {[...Array(3)].map((_, i) => (
            <Line key={i} />
          ))}
        </Button>
      )}
      <CustomTransition isOpen={isOpen} timeout={500}>
        {(state: string) => <Backdrop state={state} onClick={onClose} />}
      </CustomTransition>
      <CustomTransition isOpen={isOpen}>
        {(state: string) => (
          <MenuBody state={state}>
            <MenuItems onClose={onClose} />
          </MenuBody>
        )}
      </CustomTransition>
    </Container>
  );
};
