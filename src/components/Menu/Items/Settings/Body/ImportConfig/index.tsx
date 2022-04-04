import { ReactComponent as Upload } from "@assets/icons/upload.svg";
import { ChangeEvent, useState } from "react";
import { Item, ItemTitle } from "../utils";
import { FileInputModal } from "@components/Modals/File";

const onChange = (e: ChangeEvent<HTMLInputElement>) => {
	const fr = new FileReader();

	if (e.target.files) {
		fr.readAsText(e.target.files[0]);
		fr.onload = function () {
			if (typeof fr.result === "string") {
				const config = JSON.parse(fr.result);

				Object.keys(config).forEach((key) => {
					localStorage.setItem(key, JSON.stringify(config[key]));
				});
				window.location.reload();
			}
		};
	}
};

export const MenuImportConfigItem = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModalOpen = () => setIsModalOpen((isOpen) => !isOpen);

	return (
		<>
			<Item onClick={toggleModalOpen}>
				<Upload width="2.3em" height="2.3em" />
				<ItemTitle>Import config</ItemTitle>
			</Item>
			<>
				<FileInputModal
					isOpen={isModalOpen}
					onClose={toggleModalOpen}
					onChange={onChange}
				/>
			</>
		</>
	);
};
