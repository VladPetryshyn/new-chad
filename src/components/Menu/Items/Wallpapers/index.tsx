import { ReactComponent as Gallery } from "@assets/icons/gallery.svg";
import { FC } from "react";
import { AnimatedContainer, MenuItemHeader } from "../helpers";
import { ItemProps } from "../types";
import { WallpapersBody } from "./Body";

export const Wallpapers: FC<ItemProps> = ({ state }) => {
	return (
		<AnimatedContainer state={state}>
			<MenuItemHeader Icon={Gallery} title="Wallpapers" />
			<WallpapersBody />
		</AnimatedContainer>
	);
};
