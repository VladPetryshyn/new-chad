import { Gallery } from "@icons/Feather/gallery";
import { FC } from "react";
import { AnimatedContainer, MenuItemHeader } from "../helpers";
import { ItemProps } from "../types";

export const Wallpapers: FC<ItemProps> = ({ state }) => {
  return (
    <AnimatedContainer state={state}>
      <MenuItemHeader Icon={Gallery} title="Wallpapers" />
    </AnimatedContainer>
  );
};
