import styled from "styled-components";
import { ReactComponent as More } from "@assets/icons/moreHorizontal.svg";
import { FC } from "react";

const Button = styled.button`
  cursor: pointer;
  background: none;
  position: absolute;
  top: -2em;
  right: 0;
  opacity: 0;
  transition: all 0.3s ease;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  &:hover {
    ${Button} {
      opacity: 1;
    }
  }
`;

export const WidgetContainer: FC = ({ children }) => {
	return (
		<Container>
			<Button>
				<More width="2em" height="2em" />
			</Button>
			{children}
		</Container>
	);
};
