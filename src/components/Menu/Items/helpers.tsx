import styled from "styled-components";
import { ReactComponent as Plus } from "@assets/icons/plus.svg";
import { FC, SVGProps } from "react";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;

export const Title = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 47px;
  margin-top: 20px;
`;

interface MenuItemContainerProps {
  Icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
}

export const MenuItemHeader: FC<MenuItemContainerProps> = ({ Icon, title }) => {
	return (
		<HeaderContainer>
			<Icon width="6em" height="6em" />
			<Title>{title}</Title>
		</HeaderContainer>
	);
};

export const AnimatedContainer = styled.div`
  ${(p: { state: string }) => {
		switch (p.state) {
		case "entering":
			return `
          transform: translateX(100%);
             `;
		case "entered":
			return `
          transform: translateX(0%);
          transition: all 300ms ease;
          `;
		case "exiting":
			return `
          transform: translateX(100%);
          transition: all 300ms ease;
          `;
		default:
			return "";
		}
	}}
`;

const MenuCardPlusButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(p) => p.theme.bg}66;
  border-radius: 2.5em;
  top: 0;
  opacity: 0;
  transition: all 0.3s ease;
  position: absolute;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const MenuCardPlusButtonButton = styled(Plus)`
  width: 5em;
  height: 5em;
  position: relative;
  top: calc(50% - 2.5em);
  left: calc(50% - 2.5em);
  color: ${(p) => p.theme.primary};
`;

export const MenuCardPlusButton = ({ onClick }: { onClick: () => void }) => (
	<MenuCardPlusButtonContainer onClick={onClick}>
		<MenuCardPlusButtonButton />
	</MenuCardPlusButtonContainer>
);

export const ScrollBody = styled.div`
  background: rgba(198, 198, 198, 0.13);
  border-radius: 30px;
  margin: 10px 20px 0 20px;
  padding: 2.4em 21px;
  max-height: 37em;
  overflow-y: auto;
`;
