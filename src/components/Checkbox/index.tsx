import { FC } from "react";
import styled from "styled-components";

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(p) => p.theme.bg};
  transition: 0.4s;
  border-radius: 34px;
  filter: grayscale(80%);

  &:before {
    position: absolute;
    content: "";
    height: 3.125em;
    width: 3.125em;
    left: 0.313em;
    bottom: 0.313em;
    background-color: ${(p) => p.theme.primary};
    transition: 0.4s;
    border-radius: 50px;
  }
`;

const Container = styled.label`
  font-size: 0.7rem;
  position: relative;
  display: inline-block;
  width: 6.875em;
  height: 3.75em;

  input {
    display: none;
  }

  input:checked + ${Slider} {
    filter: grayscale(0%);
  }

  input:checked + ${Slider}:before {
    transform: translateX(3.125em);
  }
`;

interface Props {
  isChecked?: boolean;
  onClick(): void;
}

export const Checkbox: FC<Props> = ({ isChecked, onClick }) => {
	return (
		<Container>
			<input type="checkbox" defaultChecked={isChecked} />
			<Slider onClick={onClick} />
		</Container>
	);
};
