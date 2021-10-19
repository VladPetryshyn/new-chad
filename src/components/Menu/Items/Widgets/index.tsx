import { Switch } from "@components/Switch";
import { Blocks } from "@icons/Feather/blocks";
import { FC, useState } from "react";
import styled from "styled-components";
import { AnimatedContainer, MenuItemHeader } from "../helpers";
import { ItemProps } from "../types";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3em;
  padding: 0 2em 2em 2em;
`;
const Item = styled.div`
  display: flex;
  & + & {
    margin-top: 2em;
  }
`;
const ItemText = styled.h3`
  font-size: 3em;
  margin-right: 2em;
  min-width: 5em;
`;

export const Widgets: FC<ItemProps> = ({ state }) => {
  const [images, setImages] = useState([]);
  return (
    <AnimatedContainer state={state}>
      <MenuItemHeader Icon={Blocks} title="Widgets" />
      <BodyContainer>
        <Item>
          <ItemText>Bookmarks</ItemText>
          <Switch />
        </Item>
        <Item>
          <ItemText>Search</ItemText>
          <Switch />
        </Item>
        <Item>
          <ItemText>Weather</ItemText>
          <Switch />
        </Item>
        <Item>
          <ItemText>Notes</ItemText>
          <Switch />
        </Item>
      </BodyContainer>
    </AnimatedContainer>
  );
};
