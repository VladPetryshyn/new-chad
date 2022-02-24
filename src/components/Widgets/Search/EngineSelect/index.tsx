import styled from "styled-components";
import { FC } from "react";
import { useToggle } from "@utils/hooks";
import { IconSelect } from "@components/Selects/IconSelect";
import { SearchItemI } from "@utils/types";

interface Props {
  setOption: (v: SearchItemI) => void;
}

const Container = styled.div`
  background: red;
`;
const IconContainer = styled.div`
  cursor: pointer;
  svg {
    cursor: pointer;
    position: absolute;
    // fill: ${(p) => p.theme.primary};
    margin-top: 0.2em;
    margin-left: 0.2em;
    z-index: 2;
    width: 2em;
    height: 2em;
    color: ${(p) => p.theme.primary};
  }
`;

export const SearchEngineSelect: FC<Props> = ({ children, setOption }) => {
	const [isOpen, toggleOpen] = useToggle(false);

	const onSelect = (engine: SearchItemI) => {
		localStorage.setItem("searchEngine", JSON.stringify(engine));
		setOption(engine);
		toggleOpen();
	};

	return (
		<Container>
			<IconContainer onClick={toggleOpen}>{children}</IconContainer>
			<IconSelect onSelect={onSelect} isOpen={isOpen} />
		</Container>
	);
};
