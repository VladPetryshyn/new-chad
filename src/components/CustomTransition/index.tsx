import { FC } from "react";
import { Transition } from "react-transition-group";

interface Props {
  isOpen: boolean;
  timeout?: number | { enter: number; exit: number };
}

export const CustomTransition: FC<Props> = ({
	children,
	isOpen,
	timeout = { enter: 0, exit: 300 },
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
