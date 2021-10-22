import { FC } from "react";
import styled from "styled-components";
import { ReactComponent as Blocks } from "@assets/icons/blocks.svg";
import { ReactComponent as Feather } from "@assets/icons/feather.svg";
import { ReactComponent as Gallery } from "@assets/icons/gallery.svg";
import { MenuItemsStates } from "../..";
import { Credits } from "../Credits";
import { Item, ItemTitle } from "./utils";
import { MenuWeatherItem } from "./Weather";
import { MenuImportConfigItem } from "./ImportConfig";
import { MenuExportConfigItem } from "./ExportConfig";

const List = styled.div`
  margin-top: 60px;
  margin-left: 57px;
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
          <>
            <Item onClick={onClick(setState, id)} key={id}>
              <Icon width="2.3em" height="2.3em" />
              <ItemTitle>{title}</ItemTitle>
            </Item>
          </>
        ))}
        <MenuWeatherItem />
        <MenuImportConfigItem />
        <MenuExportConfigItem />
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
    title: "Color palettes",
    Icon: Feather,
    id: 4,
  },
  {
    title: "Wallpapers",
    Icon: Gallery,
    id: 6,
  },
];
