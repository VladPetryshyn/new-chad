import { DefaultThemeKeys } from "@utils/constants/themes";
import { useToggle } from "@utils/hooks";
import { useAppDispatch } from "@utils/hooks/store";
import { invertColor } from "@utils/index";
import { FC, useState } from "react";
import { HexColorPicker } from "react-colorful";
import styled from "styled-components";
import { updateThemeAC } from "../../../../../../store/themes/actions";

interface Props {
  color: string;
  colorName: DefaultThemeKeys;
  themeId: string;
}

const Body = styled.div`
  height: 15em;
  ${(props: { color: string }) => `
                background: ${props.color};
color: ${invertColor(props.color)};`}
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ColorPickerBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const ColorPickerContainer = styled.div`
  position: absolute;
  z-index: 3;
  right: -110%;
  top: 0.5em;
  max-width: 200px;
`;

const Container = styled.div`
  position: relative;
  flex: 1;
  &:first-child {
    ${Body} {
      border-bottom-left-radius: 2.5em;
    }
  }
  &:last-child {
    ${Body} {
      border-bottom-right-radius: 2.5em;
    }
    ${ColorPickerContainer} {
      right: 0;
      left: -110%;
    }
  }
`;

export const Color: FC<Props> = ({ children, color, themeId, colorName }) => {
	const dispatch = useAppDispatch();
	const [state, toggle] = useToggle();
	const [newColor, setNewColor] = useState(color);

	const onClose = () => {
		toggle();
		dispatch(
			updateThemeAC({
				themeId,
				colorName,
				colorValue: newColor,
			}),
		);
	};

	return (
		<Container>
			<Body color={newColor} onClick={toggle}>
				{children}
			</Body>
			{state && (
				<ColorPickerContainer>
					<ColorPickerBackdrop onClick={onClose} />
					<HexColorPicker color={newColor} onChange={setNewColor} />
				</ColorPickerContainer>
			)}
		</Container>
	);
};
