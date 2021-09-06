import { FC } from "react";
import { AnimatedContainer, MenuItemHeader } from "../helpers";
import { Feather } from "@icons/Feather/feather";
import { ColorsBody } from "./Body";
import { ItemProps } from "../types";

export const Colors: FC<ItemProps> = ({ state }) => {
  return (
    <AnimatedContainer state={state}>
      <MenuItemHeader Icon={Feather} title="Colors" />
      <ColorsBody />
    </AnimatedContainer>
  );
};
