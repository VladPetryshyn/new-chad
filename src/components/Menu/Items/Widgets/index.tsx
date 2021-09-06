import { Blocks } from "@icons/Feather/blocks";
import { FC } from "react";
import { AnimatedContainer, MenuItemHeader } from "../helpers";
import { ItemProps } from "../types";

export const Widgets: FC<ItemProps> = ({ state }) => {
  return (
    <AnimatedContainer state={state}>
      <MenuItemHeader Icon={Blocks} title="Widgets" />
    </AnimatedContainer>
  );
};
