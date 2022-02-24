import { dbPromise, deleteWallpaperFromIDB } from "@utils/indexedDB";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { WallpapersAddItem } from "../AddItem";
import { WallpaperItem } from "../WallpaperItem";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 1em;
  margin: 0;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: dense;
  grid-gap: 1em;
  overflow-y: auto;
  max-height: 37em;
`;

export const WallpapersBody = () => {
	const [wallpapers, setWallpapers] = useState<Array<number>>([]);

	useEffect(() => {
		const fetchWallpapers = async () => {
			const db = await dbPromise;
			const tx = db.transaction("Wallpapers", "readwrite");
			const store = tx.objectStore("Wallpapers");
			const ids = (await store.getAllKeys()) as [number];

			setWallpapers(ids);
		};

		fetchWallpapers();
	}, []);

	const addWallpaper = (wallpaper: number) =>
		setWallpapers((wallpapers) => [...wallpapers, wallpaper]);
	const deleteWallpaper = async (id: number) => {
		const currentId = localStorage.getItem("currentWallpaper");
		if (currentId && id !== +currentId)
			setWallpapers((wallpapers) => wallpapers.filter((wall) => wall !== id));
		deleteWallpaperFromIDB(id);
	};

	return (
		<BodyContainer>
			<ItemsContainer>
				{wallpapers.map((id) => (
					<WallpaperItem
						isCurrent={false}
						deleteWallpaper={deleteWallpaper}
						id={id}
						key={id}
					/>
				))}
				<WallpapersAddItem addWallpaper={addWallpaper} />
			</ItemsContainer>
		</BodyContainer>
	);
};
