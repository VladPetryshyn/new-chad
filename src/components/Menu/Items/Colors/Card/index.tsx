import { Theme } from "@utils/constants";
import { ReactComponent as Trash } from "@assets/icons/trash.svg";
import { ReactComponent as Check } from "@assets/icons/check.svg";
import { FC } from "react";
import styled from "styled-components";
import { useAppDispatch } from "@utils/hooks/store";
import { setThemeAC } from "../../../../../store/theme/actions";
import { deleteThemeAC } from "../../../../../store/themes/actions";

const iconSize = "2em";

const Container = styled.div`
  background: #${(p) => p.theme.bg};
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

const ThemeName = styled.h3`
  font-size: 2.5em;
  color: #${(p) => p.theme.fg};
`;

const EditIcon = styled(Trash)`
  width: ${iconSize};
  height: ${iconSize};
  cursor: pointer;
`;

const ApplyIcon = styled(Check)`
  width: ${iconSize};
  height: ${iconSize};
  cursor: pointer;
`;

const Color = styled.div`
  height: 15em;
  flex: 1;
  background: ${(props: { color: string }) => props.color};
  &:first-child {
    border-bottom-left-radius: 2.5em;
  }
  &:last-child {
    border-bottom-right-radius: 2.5em;
  }
`;

interface Props {
  theme: Theme;
}

export const ColorCard: FC<Props> = ({ theme }) => {
  const { name, colors, id } = theme;

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
        <ThemeName>{name}</ThemeName>
        <EditIcon />
      </Header>
      <Body>
        {Object.values(colors).map((v, idx) => (
          <Color color={`#${v}`} key={idx} />
        ))}
      </Body>
    </Container>
  );
};
