import { Modal } from "@components/Modal";
import { useState } from "react";
import styled from "styled-components";

const Text = styled.span`
  font-family: Roboto;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  position: absolute;
  cursor: pointer;
  bottom: 0;
  left: 44%;
  right: 50%;
`;

export const Credits = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Modal onClose={onClose} isOpen={isOpen}>
        <h2>Programming: Vlad Petryshyn</h2>
        <h2>Design: Vlad Petryshyn, Katya Vartanyan</h2>
      </Modal>
      <Text onClick={() => setIsOpen(true)}>credits</Text>
    </div>
  );
};
