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

  return (
    <div>
      <Modal isOpen={isOpen}></Modal>
      <Text onClick={() => setIsOpen(true)}>credits</Text>
    </div>
  );
};
