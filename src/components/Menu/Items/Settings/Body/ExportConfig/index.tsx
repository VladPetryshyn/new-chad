import { Item, ItemTitle } from "../utils";
import { ReactComponent as Download } from "@assets/icons/download.svg";

export const MenuExportConfigItem = () => {
	return (
		<Item>
			<Download height="2.3em" width="2.3em" />
			<ItemTitle>Export config</ItemTitle>
		</Item>
	);
};
