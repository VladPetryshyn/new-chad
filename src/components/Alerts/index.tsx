import { Transition } from "react-transition-group";
import ReactDOM from "react-dom";

export const Alerts = () => {
	return (
		<Transition
			timeout={{ enter: 0, exit: 300 }}
			appear={true}
			unmountOnExit={true}
			in={true}
		>
			{(state: string) => (
				<>
					{ReactDOM.createPortal(
						<span>test</span>,
            document.getElementById("alerts")!,
					)}
				</>
			)}
		</Transition>
	);
};
