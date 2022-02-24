import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Check } from "@assets/icons/check.svg";
import { ReactComponent as Trash } from "@assets/icons/trash.svg";
import { useAppDispatch } from "@utils/hooks/store";
import { updateWallpaper } from "../../../../../store/wallpapers/actions";
import { WallpaperItemContainer } from "../WallpaperItemContainer";
import { getImageFromIDB } from "@utils/indexedDB";

const Container = styled(WallpaperItemContainer)<{ isCurrent: boolean }>`
  ${(p) => (p.isCurrent ? `border: 4px solid ${p.theme.primary};` : "")};
  * {
    border-radius: 13px;
  }
`;

const ButtonsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  &:hover {
    background: ${(p) => p.theme.fg}1a;
    color: ${(p) => p.theme.bg}cc;
    backdrop-filter: blur(2px);
  }
`;

const Button = styled.button`
  background: none;
  height: 100%;
  flex: 1;
  opacity: 0;
  svg {
    width: 6em;
    height: 6em;
  }
  &:hover {
    background: ${(p) => p.theme.bg}cc;
    color: ${(p) => p.theme.fg};
    opacity: 1;
  }
  &:first-child {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  &:last-child {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;

interface Props {
  id: number;
  isCurrent: boolean;
  deleteWallpaper: (id: number) => void;
}

export const WallpaperItem: FC<Props> = ({
	id,
	isCurrent,
	deleteWallpaper,
}) => {
	const [url, setUrl] = useState("");
	const dispatch = useAppDispatch();
	useEffect(() => {
		const getImage = async () => {
			setUrl(await getImageFromIDB(id));
		};

		getImage();
	}, []);

	const setWallpaper = () => dispatch(updateWallpaper(id));

	return (
		<Container isCurrent={isCurrent}>
			<img width="100%" height="100%" src={url} alt="wallpaper" />
			<ButtonsContainer>
				<Button>
					<Check onClick={setWallpaper} />
				</Button>
				<Button onClick={() => deleteWallpaper(id)}>
					<Trash />
				</Button>
			</ButtonsContainer>
		</Container>
	);
};
