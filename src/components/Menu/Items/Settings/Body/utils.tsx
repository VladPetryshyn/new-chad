import { FC, SVGProps } from "react";
import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ItemTitle = styled.span`
  margin-left: 0.6em;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
`;

interface MenuItemProps {
  Icon: FC<SVGProps<SVGSVGElement>>;
  onClick: () => void;
  text: string;
}

export const MenuItem: FC<MenuItemProps> = ({ Icon, text, onClick }) => {
	return (
		<Item onClick={onClick}>
			<Icon width="2.3em" height="2.3em" />
			<ItemTitle>{text}</ItemTitle>
		</Item>
	);
};
