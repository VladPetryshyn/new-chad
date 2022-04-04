import { useAppSelector } from "@utils/hooks/store";
import { ScrollBody } from "../../helpers";
import { AddPalette } from "../AddPalette";
import { ColorCard } from "../Card";

export const ColorsBody = () => {
	const themes = useAppSelector(({ themes }) => themes);

	return (
		<ScrollBody>
			{themes.map((theme) => (
				<ColorCard theme={theme} key={theme.id} />
			))}
			<AddPalette />
		</ScrollBody>
	);
};
