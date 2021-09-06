import { FC } from "react";
import styled from "styled-components";
import { Blocks } from "@icons/Feather/blocks";
import { Download } from "@icons/Feather/download";
import { Feather } from "@icons/Feather/feather";
import { Gallery } from "@icons/Feather/gallery";
import { Sunrise } from "@icons/Feather/sunrise";
import { Upload } from "@icons/Feather/upload";
import { MenuItemsStates } from "../..";
import { Credits } from "../Credits";

const List = styled.div`
  margin-top: 60px;
  margin-left: 57px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  & + & {
    margin-top: 1em;
  }
  cursor: pointer;
`;

const ItemTitle = styled.span`
  margin-left: 0.3em;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
`;

type setState = (state: MenuItemsStates) => void;

interface Props {
  setState: setState;
}

const onClick = (setState: setState, id: number) => () => {
  if (id === 4) setState(MenuItemsStates.colors);
  else if (id === 1) setState(MenuItemsStates.widgets);
  else if (id === 6) setState(MenuItemsStates.wallpapers);
};

export const SettingsBody: FC<Props> = ({ setState }) => {
  return (
    <>
      <List>
        {items.map(({ title, Icon, id }) => (
          <Item onClick={onClick(setState, id)} key={id}>
            <Icon size="2.3em" /> <ItemTitle>{title}</ItemTitle>
          </Item>
        ))}
      </List>
      <Credits />
    </>
  );
};

const items = [
  {
    title: "Add widgets",
    Icon: Blocks,
    id: 1,
  },
  {
    title: "Backup config",
    Icon: Download,
    id: 2,
  },
  {
    title: "Import config",
    Icon: Upload,
    id: 3,
  },
  {
    title: "Color palettes",
    Icon: Feather,
    id: 4,
  },
  {
    title: "Weather",
    Icon: Sunrise,
    id: 5,
  },
  {
    title: "Wallpapers",
    Icon: Gallery,
    id: 6,
  },
];
