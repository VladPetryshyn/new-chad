import styled from "styled-components";
import { ReactComponent as Plus } from "@assets/icons/plus.svg";
import { FC } from "react";
import { TaskI } from "@utils/types";
import { v4 as uuid } from "uuid";
import { TasksTextarea } from "../../Textarea";
import { useToggle } from "@utils/hooks";

const Container = styled.div`
  position: relative;
`;

const PlusIcon = styled(Plus)`
  heihgt: 2.5em;
  width: 2.5em;
  cursor: pointer;
`;

interface Props {
  onAdd: (tasks: TaskI) => void;
}

export const PlusForm: FC<Props> = ({ onAdd }) => {
	const [isOpen, toggleIsOpen] = useToggle(false);

	const onSubmit = (content: string) => {
		onAdd({
			id: uuid(),
			content,
		});
	};

	return (
		<Container>
			<PlusIcon onClick={toggleIsOpen} />
			<TasksTextarea
				isOpen={isOpen}
				onSubmit={onSubmit}
				onClose={toggleIsOpen}
			/>
		</Container>
	);
};
