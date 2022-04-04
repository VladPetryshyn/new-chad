import { BookmarksWidget } from "@components/Widgets/Bookmarks";
import { ClockWidget } from "@components/Widgets/Clock";
import { SearchWidget } from "@components/Widgets/Search";
import { TasksWidget } from "@components/Widgets/Tasks";
import { Widgets } from "../../types";

export const defaultWidgetSettings = [
	{ widget: Widgets.clock, isActive: true },
	{ widget: Widgets.search, isActive: true },
	{ widget: Widgets.bookmarks, isActive: true },
	{ widget: Widgets.tasks, isActive: true },
];

export interface WidgetSettingsI {
  widget: Widgets;
  isActive: boolean;
}
export type DefaultWidgetSettingsT = typeof defaultWidgetSettings;
export type DefaultWidgetSettingsKeys = keyof DefaultWidgetSettingsT;

export const WidgetItems = {
	[Widgets.clock]: ClockWidget,
	[Widgets.search]: SearchWidget,
	[Widgets.bookmarks]: BookmarksWidget,
	[Widgets.tasks]: TasksWidget,
};
