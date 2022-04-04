import { FC, SVGProps } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.3em;
  & + & {
    border-top: 1px solid ${(p) => p.theme.primary};
  }
`;

const IconContainer = styled.div`
  flex: 1;

  svg {
    width: 1.2em;
    height: 1.2em;
  }
`;
const TextContainer = styled.div`
  flex: 2;
  margin-left: 0.3em;
`;

interface Props {
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  onClick: () => void;
}

export const SelectItem: FC<Props> = ({ text, Icon, onClick }) => {
	return (
		<Container onClick={onClick}>
			<IconContainer>
				<Icon />
			</IconContainer>
			<TextContainer>{text}</TextContainer>
		</Container>
	);
};
