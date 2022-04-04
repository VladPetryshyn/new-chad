import { DefaultThemeKeys, Theme } from "@utils/constants/themes";
import { ReactComponent as Trash } from "@assets/icons/trash.svg";
import { ReactComponent as Check } from "@assets/icons/check.svg";
import { FC } from "react";
import styled from "styled-components";
import { useAppDispatch } from "@utils/hooks/store";
import { setThemeAC } from "../../../../../store/theme/actions";
import { deleteThemeAC } from "../../../../../store/themes/actions";
import { Color } from "./Color";

const iconSize = "2em";

const Container = styled.div`
  background: ${(p) => p.theme.bg};
  border-radius: 2.5em;

  & + & {
    margin-top: 3em;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
`;

const Body = styled.main`
  display: flex;
`;

const TrashIcon = styled(Trash)`
  width: ${iconSize};
  height: ${iconSize};
  cursor: pointer;
`;

const ApplyIcon = styled(Check)`
  width: ${iconSize};
  height: ${iconSize};
  cursor: pointer;
`;

interface Props {
  theme: Theme;
}

export const ColorCard: FC<Props> = ({ theme }) => {
	const { colors, id } = theme;

	const dispatch = useAppDispatch();

	const setTheme = () => {
		localStorage.setItem("currentTheme", JSON.stringify(theme));
		dispatch(setThemeAC(theme));
	};

	const deleteTheme = () => dispatch(deleteThemeAC(id));

	return (
		<Container>
			<Header>
				<ApplyIcon onClick={setTheme} />
				<TrashIcon onClick={deleteTheme} />
			</Header>
			<Body>
				{Object.entries(colors).map(([k, v], idx) => (
					<Color
						color={v}
						key={idx}
						colorName={k as DefaultThemeKeys}
						themeId={id}
					>
						{k}
					</Color>
				))}
			</Body>
		</Container>
	);
};
