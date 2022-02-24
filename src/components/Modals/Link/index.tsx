import { Input } from "@components/Input";
import { iconsList, IconsListKeys } from "@utils/iconList";
import { FC, useState } from "react";
import styled from "styled-components";
import { Modal, ModalProps } from "..";
import { IconSelectModal } from "../IconSelect";
import { v4 as uuidv4 } from "uuid";
import { LinkItemI, SearchItemI } from "@utils/types";
import { useToggle } from "@utils/hooks";

const Heading = styled.h3`
  color: ${(p) => p.theme.fg};
  font-size: 2.5em;
  margin: 0.7em 0 0.3em 0;
`;
const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  padding: 2em;
`;
const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  justify-content: center;

  input {
    font-size: 1.2em;
    min-width: 20em;
    &::placeholder {
      text-align: center;
    }
  }

  input + input {
    margin-top: 1.3em;
  }
`;

const IconContainer = styled.button`
  background: ${(p) => p.theme.bg}99;
  font-size: 1.2rem;
  border-radius: 1em;
  padding: 3em;
  margin-left: 1.5em;
  backdrop-filter: blur(10px);
  svg {
    color: ${(p) => p.theme.fg};
    width: 3em;
    height: 3em;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
`;
const Button = styled.button`
  flex: 1;
  background: none;
  color: ${(p) => p.theme.fg};
  text-align: center;
  font-size: 1.3em;
  padding: 1em;
  transition: all 0.3s ease;

  &:hover {
    background: ${(p) => p.theme.bg}59;
  }
  &:first-child {
    border-bottom-left-radius: 1.8em;
  }
  &:last-child {
    border-bottom-right-radius: 1.8em;
  }
`;

interface Props extends ModalProps {
  isLink: boolean;
  onSubmit(p: LinkItemI | SearchItemI): void;
}

export const LinkModal: FC<Props> = ({
	isLink,
	onSubmit,
	onClose,
	...props
}) => {
	const [icon, setIcon] = useState<IconsListKeys>("search");
	const [name, setName] = useState("");
	const [link, setLink] = useState("");
	const [isIconSelectOpen, toggleIconSelect] = useToggle(false);

	const changeField =
    (func: (s: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) =>
    	func(e.target.value);
	const submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit({ icon, link, id: uuidv4(), ...(isLink ? { name } : {}) });
		onClose();
		setIcon("search");
	};

	return (
		<Modal {...props} onClose={onClose}>
			<Wrapper onSubmit={submit}>
				<Heading>
					{isLink ? "Add your bookmark" : "Add your search engine"}
				</Heading>
				<Container>
					<InputsContainer>
						{isLink && (
							<Input
								name="name"
								placeholder="Name"
								onChange={changeField(setName)}
							/>
						)}
						<Input
							name="link"
							placeholder="URL"
							onChange={changeField(setLink)}
						/>
					</InputsContainer>
					<IconContainer type="button" onClick={toggleIconSelect}>
						{iconsList[icon]}
					</IconContainer>
					<IconSelectModal
						onSelect={setIcon}
						isOpen={isIconSelectOpen}
						onClose={toggleIconSelect}
					/>
				</Container>
				<ButtonsContainer>
					<Button type="button" onClick={onClose}>
            Cancel
					</Button>
					<Button type="submit">Add</Button>
				</ButtonsContainer>
			</Wrapper>
		</Modal>
	);
};
