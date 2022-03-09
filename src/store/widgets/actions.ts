import { Widgets } from "@utils/types";

export interface toggleVisibility {
  type: "widgets/toggleVisibility";
  payload: string;
}

export interface changeStyle {
  type: "widgets/changeStyle";
  payload: string;
}

export const toggleVisibilityAC = (payload: Widgets): toggleVisibility => ({
	type: "widgets/toggleVisibility",
	payload,
});

export const changeStyleAC = (payload: string): changeStyle => ({
	type: "widgets/changeStyle",
	payload,
});

export type WidgetsActions = toggleVisibility | changeStyle;
