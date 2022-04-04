import { ReactComponent as Blocks } from "@assets/icons/blocks.svg";
import { renderObjectItem } from "@utils/index";
import { WidgetItems } from "@utils/constants/widgets";
import { FC } from "react";
import { AnimatedContainer, MenuItemHeader, ScrollBody } from "../helpers";
import { ItemProps } from "../types";
import { Widget } from "./Widget";
import { useAppSelector } from "@utils/hooks/store";

export const Widgets: FC<ItemProps> = ({ state }) => {
	const widgets = useAppSelector(({ widgets }) => widgets);

	return (
		<AnimatedContainer state={state}>
			<MenuItemHeader Icon={Blocks} title="Widgets" />
			<ScrollBody>
				{widgets.map(({ widget, isActive }) => (
					<Widget widget={widget} isActive={isActive} key={widget}>
						{renderObjectItem(WidgetItems[widget], { isPreview: true })}
					</Widget>
				))}
			</ScrollBody>
		</AnimatedContainer>
	);
};
