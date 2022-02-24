import styled from "styled-components";
import { ReactComponent as Plus } from "@assets/icons/plus.svg";
import { WallpaperItemContainer } from "../WallpaperItemContainer";
import { FileInputModal } from "@components/Modals/File";
import { ChangeEvent, FC, useState } from "react";
import { dbPromise } from "@utils/indexedDB";
import { updateWallpaper } from "../../../../../store/wallpapers/actions";
import { useAppDispatch } from "@utils/hooks/store";

const Container = styled(WallpaperItemContainer)`
  border-radius: 15px;
  backdrop-filter: blur(100px);
  cursor: pointer;
  background: ${(p) => p.theme.bg}8c;

  svg {
    height: 4em;
    width: 4em;
    color: ${(p) => p.theme.primary};
  }
`;

interface Props {
  addWallpaper: (id: number) => void;
}

export const WallpapersAddItem: FC<Props> = ({ addWallpaper }) => {
	const dispatch = useAppDispatch();
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => setIsOpen((isOpen) => !isOpen);

	const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files) {
			const db = await dbPromise;
			const tx = db.transaction("Wallpapers", "readwrite");
			const store = tx.objectStore("Wallpapers");

			await store.add(files[0]);

			const cursor = await store.openCursor(null, "prev");
			const key = cursor?.key as number;
			addWallpaper(key);
			dispatch(updateWallpaper(key));
			toggleIsOpen();
		}
	};

	return (
		<>
			<Container onClick={toggleIsOpen}>
				<Plus />
			</Container>
			<FileInputModal
				isOpen={isOpen}
				onClose={toggleIsOpen}
				onChange={onChange}
				acceptedFileTypes=".jpg,.jpeg,.png,.gif"
			/>
		</>
	);
};
