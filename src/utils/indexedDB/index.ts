import { openDB } from "idb";

export const dbPromise = openDB("NewChadWallpapers", 1, {
	upgrade: (db) => {
		if (!db.objectStoreNames.contains("Wallpapers")) {
			db.createObjectStore("Wallpapers", { autoIncrement: true });
		}
	},
});

const getStore = async (type: "readonly" | "readwrite" = "readonly") => {
	const db = await dbPromise;
	const tx = db.transaction("Wallpapers", type);

	return tx.objectStore("Wallpapers");
};

export const getImageFromIDB = async (id: number) => {
	const store = await getStore();

	return URL.createObjectURL(await store.get(id));
};

export const deleteWallpaperFromIDB = async (id: number) => {
	const currentId = localStorage.getItem("currentWallpaper");
	const store = await getStore("readwrite");

	if (currentId && id !== +currentId && store.delete) store.delete(id);
};
