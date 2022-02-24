import { iconsList, IconsListKeys } from "@utils/iconList";
import { FC, FormEvent, useState } from "react";
import { ReactComponent as Search } from "@assets/icons/search.svg";
import styled from "styled-components";
import { Input } from "@components/Input";
import { Modal } from "@components/Modals";
import { ModalProps } from "@components/Modals";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 55em;
  padding: 1em;
`;
const SearchIcon = styled(Search)`
  width: 8.5em;
  height: 8.5em;
`;
const IconInput = styled(Input)`
  text-align: center;
  border-radius: 1em;
  font-size: 1.2em;
  width: 30em;
`;
const IconList = styled.div`
  cursor: pointer;
  margin-top: 1.5em;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1.5em;
  svg {
    color: ${(p) => p.theme.fg};
    width: 5em;
    height: 5em;
  }
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: ${(p) => p.theme.fg};
    font-size: 1.5em;
  }
`;

interface Props extends ModalProps {
  onSelect(iconName: IconsListKeys): void;
}

const initialList = Object.entries(iconsList);

export const IconSelectModal: FC<Props> = ({ onSelect, onClose, isOpen }) => {
	const [value, setValue] = useState("");

	const filteredList = initialList.filter(([key]) => key.includes(value));

	const onIconSelect = (key: IconsListKeys) => {
		onSelect(key);
		setValue("");
		onClose();
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onIconSelect(filteredList[0][0] as IconsListKeys);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Container>
				<SearchIcon />
				<form onSubmit={onSubmit}>
					<IconInput
						onChange={(e) => setValue(e.target.value)}
						placeholder="Search for Icon"
					/>
				</form>
				<IconList>
					{filteredList.map(([key, value]) => (
						<IconItem
							key={key}
							onClick={() => onIconSelect(key as IconsListKeys)}
						>
							{value}
							<span>{key}</span>
						</IconItem>
					))}
				</IconList>
			</Container>
		</Modal>
	);
};
