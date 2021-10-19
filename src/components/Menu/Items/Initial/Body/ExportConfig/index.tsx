import { Item, ItemTitle } from "../utils";
import { Download } from "@icons/Feather/download";

export const MenuExportConfigItem = () => {
  return (
    <Item>
      <Download size="2.3em" />
      <ItemTitle>Export config</ItemTitle>
    </Item>
  );
};
