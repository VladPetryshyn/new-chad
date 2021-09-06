import styled from "styled-components";
import { FC } from "react";
import { IconI } from "@icons/Feather/types";

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
  Icon: FC<IconI>;
  title: string;
}

export const MenuItemHeader: FC<MenuItemContainerProps> = ({ Icon, title }) => {
  return (
    <HeaderContainer>
      <Icon size="6em" />
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
