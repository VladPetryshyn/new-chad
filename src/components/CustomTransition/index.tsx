import { FC } from "react";
import { Transition } from "react-transition-group";

interface Props {
  isOpen: boolean;
  timeout?: number;
}

export const CustomTransition: FC<Props> = ({
  children,
  isOpen,
  timeout = 300,
}) => {
  return (
    <Transition
      in={isOpen}
      unmountOnExit={true}
      addEndListener={(node: HTMLElement, done: () => void) => {
        node.addEventListener("transitionend", done, false);
      }}
      timeout={timeout}
    >
      {children}
    </Transition>
  );
};
