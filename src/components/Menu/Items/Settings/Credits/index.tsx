import { Modal } from "@components/Modals";
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
const Heading = styled.h2`
  font-size: 2em;
`;
const Container = styled.div`
  padding: 1em;
`;

export const Credits = () => {
	const [isOpen, setIsOpen] = useState(false);

	const onClose = () => {
		setIsOpen(false);
	};

	return (
		<div>
			<Modal onClose={onClose} isOpen={isOpen}>
				<Container>
					<Heading>Programming: Vlad Petryshyn</Heading>
					<Heading>Design: Vlad Petryshyn, Katya Vartanyan</Heading>
				</Container>
			</Modal>
			<Text onClick={() => setIsOpen(true)}>credits</Text>
		</div>
	);
};
