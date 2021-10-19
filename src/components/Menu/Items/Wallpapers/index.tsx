import { ReactComponent as Gallery } from "@assets/icons/gallery.svg";
import { FC } from "react";
import styled from "styled-components";
import { AnimatedContainer, MenuItemHeader } from "../helpers";
import { ItemProps } from "../types";
import { WallpapersForm } from "./Form";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3em;
  padding: 0 2em 2em 2em;
`;

export const Wallpapers: FC<ItemProps> = ({ state }) => {
  return (
    <AnimatedContainer state={state}>
      <MenuItemHeader Icon={Gallery} title="Wallpapers" />
      <BodyContainer>
        <WallpapersForm />
      </BodyContainer>
    </AnimatedContainer>
  );
};
