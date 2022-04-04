import { ReactComponent as ArrowLeft } from "@assets/icons/arrowLeft.svg";
import { ReactComponent as Bing } from "@assets/icons/bing.svg";
import { ReactComponent as Blocks } from "@assets/icons/blocks.svg";
import { ReactComponent as Check } from "@assets/icons/check.svg";
import { ReactComponent as Close } from "@assets/icons/close.svg";
import { ReactComponent as Cog } from "@assets/icons/cog.svg";
import { ReactComponent as Download } from "@assets/icons/download.svg";
import { ReactComponent as Duckduckgo } from "@assets/icons/duckduckgo.svg";
import { ReactComponent as Edit } from "@assets/icons/edit.svg";
import { ReactComponent as Feather } from "@assets/icons/feather.svg";
import { ReactComponent as Gallery } from "@assets/icons/gallery.svg";
import { ReactComponent as Google } from "@assets/icons/google.svg";
import { ReactComponent as MoreHorizontal } from "@assets/icons/moreHorizontal.svg";
import { ReactComponent as Plus } from "@assets/icons/plus.svg";
import { ReactComponent as Search } from "@assets/icons/search.svg";
import { ReactComponent as Sunrise } from "@assets/icons/sunrise.svg";
import { ReactComponent as Trash } from "@assets/icons/trash.svg";
import { ReactComponent as Upload } from "@assets/icons/upload.svg";
import { ReactComponent as Yahoo } from "@assets/icons/yahoo.svg";

export const iconsList = {
	arrowLeft: <ArrowLeft />,
	bing: <Bing />,
	blocks: <Blocks />,
	check: <Check />,
	close: <Close />,
	cog: <Cog />,
	download: <Download />,
	duckduckgo: <Duckduckgo />,
	edit: <Edit />,
	feather: <Feather />,
	gallery: <Gallery />,
	google: <Google />,
	moreHorizontal: <MoreHorizontal />,
	plus: <Plus />,
	search: <Search />,
	sunrise: <Sunrise />,
	trash: <Trash />,
	upload: <Upload />,
	yahoo: <Yahoo />,
};export type IconsListKeys = keyof typeof iconsList;