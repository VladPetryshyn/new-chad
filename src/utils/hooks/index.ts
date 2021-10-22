import { useState } from "react";

export const useToggle = (): [boolean, () => void] => {
  const [state, setState] = useState(false);

  const toggle = () => setState((prevState) => !prevState);

  return [state, toggle];
};
