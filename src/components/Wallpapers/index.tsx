import { useAppSelector } from "@utils/hooks/store";
import styled from "styled-components";

const Container = styled.div<{ wallpaper: string }>`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  background: url(${(p) => p.wallpaper}) no-repeat center/cover;
`;

export const Wallpapers = () => {
	const wallpaper = useAppSelector(({ wallpaper }) => wallpaper);

	return (
		<Container
			wallpaper={
				wallpaper ||
        "https://wallpapercave.com/download/macbook-wallpapers-hd-wp2870228"
			}
		/>
	);
};
