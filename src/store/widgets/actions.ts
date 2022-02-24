import { Widgets } from "@utils/types";

export interface toggleVisibility {
  type: "widgets/toggleVisibility";
  payload: string;
}

export const toggleVisibilityAC = (payload: Widgets): toggleVisibility => ({
	type: "widgets/toggleVisibility",
	payload,
});

export type WidgetsActions = toggleVisibility;
