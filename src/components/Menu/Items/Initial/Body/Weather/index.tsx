import { Input } from "@components/Input";
import { Modal } from "@components/Modal";
import { Sunrise } from "@icons/Feather/sunrise";
import { useState } from "react";
import styled from "styled-components";
import { Item, ItemTitle } from "../utils";

const ModalContainer = styled.div`
  padding: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalInput = styled(Input)`
  border-radius: 2em;
  width: 29em;
  height: 3em;
  margin-top: 1em;
  text-align: center;
`;

export const MenuWeatherItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalOpen = () => setIsModalOpen((isOpen) => !isOpen);
  return (
    <>
      <Item onClick={toggleModalOpen}>
        <Sunrise size="2.3em" />
        <ItemTitle>Weather</ItemTitle>
      </Item>
      <Modal isOpen={isModalOpen} onClose={toggleModalOpen}>
        <ModalContainer>
          <Sunrise size="10em" color="black" />
          <ModalInput placeholder="City" />
          <ModalInput placeholder="Api-key (OpenWeatherMap)" />
        </ModalContainer>
      </Modal>
    </>
  );
};
