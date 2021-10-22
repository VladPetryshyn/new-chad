import { Modal } from "@components/Modal";
import { ReactComponent as Upload } from "@assets/icons/upload.svg";
import { useState } from "react";
import styled from "styled-components";
import { Item, ItemTitle } from "../utils";

const ModalContainer = styled.div`
  min-width: 40em;
  min-height: 20em;
  padding: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em;
  border: 0.5em dashed #${(p) => p.theme.fg};
  color: #${(p) => p.theme.fg};
`;

const ModalHeader = styled.h2`
  font-size: 2.5em;
  margin: 0.5em 0;
  color: #${(p) => p.theme.fg};
`;

const FileInput = styled.input`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

export const MenuImportConfigItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalOpen = () => setIsModalOpen((isOpen) => !isOpen);
  return (
    <>
      <Item onClick={toggleModalOpen}>
        <Upload width="2.3em" height="2.3em" />
        <ItemTitle>Import config</ItemTitle>
      </Item>
      <>
        <FileInput id="file_input" type="file" />
        <Modal isOpen={isModalOpen} onClose={toggleModalOpen}>
          <label htmlFor="file_input">
            <ModalContainer>
              <Upload height="10em" width="10em" />
              <ModalHeader>Drag or select your file </ModalHeader>
            </ModalContainer>
          </label>
        </Modal>
      </>
    </>
  );
};
