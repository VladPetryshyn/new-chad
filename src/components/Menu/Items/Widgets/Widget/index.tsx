import { Checkbox } from "@components/Checkbox";
import { useAppDispatch } from "@utils/hooks/store";
import { Widgets } from "@utils/types";
import { FC } from "react";
import styled from "styled-components";
import { toggleVisibilityAC } from "../../../../../store/widgets/actions";

const Container = styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: ${(p) => `linear-gradient(
    113.8deg,
    ${p.theme.fg}26 31.72%,
    ${p.theme.fg}73 108.66%
  );`}
  border-radius: 36px;
  backdrop-filter: blur(100px);
  & + & {
    margin-top: 1em;
  }

`;
const Header = styled.div`
  display: flex;
  padding: 0 1em;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 2.2em;
`;

const ChildrenContainer = styled.div`
  font-size: 0.37em;
  pointer-events: none;
  display: flex;
  justify-content: center;
  // margin-top: 1em;
  padding: 1em;

  & > div,
  & > form {
    margin: 0;
  }
`;

interface Props {
  widget: Widgets;
  isActive: boolean;
}

export const Widget: FC<Props> = ({ widget, children, isActive }) => {
	const dispatch = useAppDispatch();

	const onClick = () => {
		dispatch(toggleVisibilityAC(widget));
	};

	return (
		<Container>
			<Header>
				<Title>{widget}</Title>
				<Checkbox isChecked={isActive} onClick={onClick} />
			</Header>
			<ChildrenContainer>{children}</ChildrenContainer>
		</Container>
	);
};
