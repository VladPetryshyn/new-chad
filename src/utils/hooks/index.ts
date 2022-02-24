import { useState } from "react";

export const useToggle = (initial = false): [boolean, () => void] => {
	const [state, setState] = useState(initial);

	const toggle = () => setState((prevState) => !prevState);

	return [state, toggle];
};
