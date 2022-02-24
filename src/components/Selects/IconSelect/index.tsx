import { FC, useState } from "react";
import styled from "styled-components";
import { Select, SelectProps } from "../Select";
import { ReactComponent as Plus } from "@assets/icons/plus.svg";
import { LinkModal } from "@components/Modals/Link";
import { useToggle } from "@utils/hooks";
import { iconsList } from "@utils/iconList";
import { defaultSearchEngines } from "@utils/constants/widgets/defaults";
import { SearchItemI } from "@utils/types";
import { ReactComponent as Delete } from "@assets/icons/close.svg";

const Options = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;
const Option = styled.div`
  padding: 0.2em;
  svg {
    width: 2em;
    height: 2em;
    color: ${(p) => p.theme.primary};
  }
`;
const OptionContainer = styled.div`
  position: relative;
  cursor: pointer;
`;
const DeleteIcon = styled(Delete)`
  position: absolute;
  top: 2px;
  right: 5px;
  width: 1em !important;
  height: 1em !important;
  color: ${(p) => p.theme.fg} !important;
`;

export type IconSelectOptions = Array<SearchItemI>;

interface Props extends SelectProps {
  onSelect: (v: SearchItemI) => void;
}

const searchEngines = localStorage.getItem("searchEngines");

export const IconSelect: FC<Props> = ({ onSelect, ...props }) => {
	const [isModalOpen, toggleModalOpen] = useToggle(false);
	const [options, setOptions] = useState<IconSelectOptions>(
		searchEngines ? JSON.parse(searchEngines) : defaultSearchEngines,
	);
	const onSubmit = (data: SearchItemI) => {
		const newOptions = [...options, data];
		setOptions(newOptions);
		localStorage.setItem("searchEngines", JSON.stringify(newOptions));
	};
	const onDelete = (option: SearchItemI) => () => {
		if (options.length <= 1) return;

		const newOptions = options.filter(({ id }) => id !== option.id);
		const newOption = options.find(({ id }) => id !== option.id)!;
		setOptions(newOptions);
		localStorage.setItem("searchEngines", JSON.stringify(newOptions));
		onSelect(newOption);
	};

	return (
		<Select {...props}>
			<Options>
				{options.map((engine) => (
					<OptionContainer key={engine.id}>
						<DeleteIcon onClick={onDelete(engine)} />
						<Option onClick={() => onSelect(engine)}>
							{iconsList[engine.icon]}
						</Option>
					</OptionContainer>
				))}
			</Options>
			<Option onClick={toggleModalOpen}>
				<Plus />
			</Option>
			<LinkModal
				isOpen={isModalOpen}
				onClose={toggleModalOpen}
				onSubmit={onSubmit}
				isLink={false}
			/>
		</Select>
	);
};
