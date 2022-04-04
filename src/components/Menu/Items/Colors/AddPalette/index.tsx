import styled from "styled-components";
import { MenuCardPlusButton } from "../../helpers";
import { ColorCard } from "../Card";
import { useAppDispatch } from "@utils/hooks/store";
import { addThemeAC } from "../../../../../store/themes/actions";

const Container = styled.div`
  margin-top: 3em;
  position: relative;
`;

const colorCardFakeData = {
	id: "10",
	colors: {
		fg: "#ffffff",
		bg: "#ffffff",
		primary: "#ffffff",
	},
};

export const AddPalette = () => {
	const dispatch = useAppDispatch();

	const addTheme = () => dispatch(addThemeAC());

	return (
		<Container>
			<ColorCard theme={colorCardFakeData} />
			<MenuCardPlusButton onClick={addTheme} />
		</Container>
	);
};
