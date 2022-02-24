import { defaultWidgetSettings } from "@utils/constants/widgets";
import { WidgetsActions } from "./actions";

const initialState = defaultWidgetSettings;

export const widgetsReducer = (
	state = initialState,
	action: WidgetsActions,
) => {
	switch (action.type) {
	case "widgets/toggleVisibility":
		return state.map((widget) =>
			widget.widget === action.payload
				? {
					...widget,
					isActive: !widget.isActive,
				}
				: widget,
		);
	default:
		return state;
	}
};
