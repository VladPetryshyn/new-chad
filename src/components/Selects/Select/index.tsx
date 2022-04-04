import { CustomTransition } from "@components/CustomTransition";
import { FC } from "react";
import styled from "styled-components";

const Container = styled.div<{ state: string }>`
  background: ${(p) => `linear-gradient(
    113.8deg,
    ${p.theme.bg}8F 31.72%,
    ${p.theme.bg}24 127.82%
  )`};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  position: absolute;
  top: calc(100% + 0.2em);
  transition: 200ms;
  opacity: ${(p) => (p.state === "entered" ? 1 : 0)};
  z-index: 1;
`;

export interface SelectProps {
  isOpen: boolean;
}

export const Select: FC<SelectProps> = ({ children, isOpen }) => {
	return (
		<CustomTransition isOpen={isOpen} timeout={{ enter: 0, exit: 200 }}>
			{(state: string) => <Container state={state}>{children}</Container>}
		</CustomTransition>
	);
};
