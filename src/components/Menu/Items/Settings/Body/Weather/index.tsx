import { Input } from "@components/Input";
import { Modal } from "@components/Modals";
import { ReactComponent as Sunrise } from "@assets/icons/sunrise.svg";
import { useState } from "react";
import styled from "styled-components";
import { Item, ItemTitle } from "../utils";

const ModalContainer = styled.div`
  padding: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #${(p) => p.theme.fg};
`;

const ModalInput = styled(Input)`
  border-radius: 2em;
  width: 29em;
  height: 3em;
  margin-top: 1em;
  text-align: center;
`;

const ModalIcon = styled(Sunrise)`
  color: ${(p) => p.theme.fg};
`;

export const MenuWeatherItem = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModalOpen = () => setIsModalOpen((isOpen) => !isOpen);
	return (
		<>
			<Item onClick={toggleModalOpen}>
				<Sunrise height="2.3em" width="2.3em" />
				<ItemTitle>Weather</ItemTitle>
			</Item>
			<Modal isOpen={isModalOpen} onClose={toggleModalOpen}>
				<ModalContainer>
					<ModalIcon width="10em" height="10em" />
					<ModalInput placeholder="City" />
					<ModalInput placeholder="Api-key (OpenWeatherMap)" />
				</ModalContainer>
			</Modal>
		</>
	);
};
