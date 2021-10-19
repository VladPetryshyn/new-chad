import { FC } from "react";
import styled from "styled-components";
import { Blocks } from "@icons/Feather/blocks";
import { Feather } from "@icons/Feather/feather";
import { Gallery } from "@icons/Feather/gallery";
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
              <Icon size="2.3em" /> <ItemTitle>{title}</ItemTitle>
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
  // {
  //   title: "Backup config",
  //   Icon: Download,
  //   id: 2,
  // },
  // {
  //   title: "Import config",
  //   Icon: Upload,
  //   id: 3,
  // },
  {
    title: "Color palettes",
    Icon: Feather,
    id: 4,
  },
  {
    title: "Wallpapers",
    Icon: Gallery,
    id: 5,
  },
];
