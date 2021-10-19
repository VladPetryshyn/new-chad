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
  background: #${(p) => p.theme.bg};
  opacity: 0;
  transition: all 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

const MenuCardPlusButtonButton = styled(Plus)`
  width: 3em;
  height: 3em;
`;

export const MenuCardPlusButton = ({ onClick }: { onClick: () => void }) => (
  <MenuCardPlusButtonContainer onClick={onClick}>
    <MenuCardPlusButtonButton />
  </MenuCardPlusButtonContainer>
);
