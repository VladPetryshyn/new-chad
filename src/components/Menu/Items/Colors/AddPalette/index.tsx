import { random } from "@utils/index";
import { randomThemeNames } from "@utils/constants/themes";
import styled from "styled-components";
import { MenuCardPlusButton } from "../../helpers";
import { ColorCard } from "../Card";
import { useAppDispatch } from "@utils/hooks/store";
import { addThemeAC } from "../../../../../store/themes/actions";

const Container = styled.div`
  margin-top: 3em;
  position: relative;
`;

const name = randomThemeNames[random(randomThemeNames.length - 1)];

export const AddPalette = () => {
	const dispatch = useAppDispatch();

	const addTheme = () => dispatch(addThemeAC(name));

	return (
		<Container>
			<ColorCard
				theme={{
					id: "10",
					name,
					colors: {
						fg: "#ffffff",
						bg: "#ffffff",
						primary: "#ffffff",
					},
				}}
			/>
			<MenuCardPlusButton onClick={addTheme} />
		</Container>
	);
};
