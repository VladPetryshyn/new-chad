import { Item, ItemTitle } from "../utils";
import { ReactComponent as Download } from "@assets/icons/download.svg";
import { exportFile } from "@utils/index";

const getDataFromFields = () =>
	Object.keys(localStorage).reduce(
		(prev, curr) => ({
			...prev,
			[curr]: JSON.parse(localStorage.getItem(curr)!),
		}),
		{},
	);

export const MenuExportConfigItem = () => {
	const exportData = () =>
		exportFile(JSON.stringify(getDataFromFields()), "config.json");

	return (
		<Item onClick={exportData}>
			<Download height="2.3em" width="2.3em" />
			<ItemTitle>Export config</ItemTitle>
		</Item>
	);
};
