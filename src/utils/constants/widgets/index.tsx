import { BookmarksWidget } from "@components/Widgets/Bookmarks";
import { ClockWidget } from "@components/Widgets/Clock";
import { SearchWidget } from "@components/Widgets/Search";
import { TasksWidget } from "@components/Widgets/Tasks";
import { Widgets } from "../../types";

export const defaultWidgetSettings = [
	{ widget: Widgets.clock, type: "default", isActive: true },
	{ widget: Widgets.search, type: "", isActive: true },
	{ widget: Widgets.bookmarks, type: "", isActive: true },
	{ widget: Widgets.tasks, type: "", isActive: true },
];

export type DefaultWidgetSettingsT = typeof defaultWidgetSettings;
export type DefaultWidgetSettingsKeys = keyof DefaultWidgetSettingsT;

export const WidgetItems = {
	[Widgets.clock]: ClockWidget,
	[Widgets.search]: SearchWidget,
	[Widgets.bookmarks]: BookmarksWidget,
	[Widgets.tasks]: TasksWidget,
};
