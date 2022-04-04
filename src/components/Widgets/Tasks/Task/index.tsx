import { Select } from "@components/Selects/Select";
import { SelectItem } from "@components/Selects/Select/Item";
import { useToggle } from "@utils/hooks";
import { TaskI } from "@utils/types";
import { FC, useState } from "react";
import { Draggable } from "react-beautiful-dnd";

import styled from "styled-components";
import { ReactComponent as TrashIcon } from "@assets/icons/trash.svg";
import { ReactComponent as EditIcon } from "@assets/icons/edit.svg";
import { TasksTextarea } from "../Textarea";

const Wrapper = styled.div`
  position: relative;
  top: auto !important;
  left: auto !important;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  font-size: 1.6rem;
  position: relative;
`;
const Text = styled.h5`
  font-size: 1em;
  margin-left: 0.3em;
  word-break: break-word;
  padding: 0.1em;
  border-radius: 0.3em;
  transition: background 0.2s ease;
  &:hover {
    background: ${(p) => p.theme.bg};
  }
`;

export interface TaskProps extends TaskI {
  index: number;
  onRemove: () => void;
  onChange: (text: string) => void;
}

export const Task: FC<TaskProps> = ({
	content,
	id,
	index,
	onRemove,
	onChange,
}) => {
	const [isSelectOpen, setIsSelectOpen] = useToggle(false);
	const [isTextareaOpen, setIsTextareaOpen] = useState(false);
	const closeTextarea = () => setIsTextareaOpen(false);

	const openTextarea = () => {
		setIsSelectOpen();
		setIsTextareaOpen(true);
	};

	const openElements = () => {
		if (!isTextareaOpen) setIsSelectOpen();
		closeTextarea();
	};

	return (
		<Draggable draggableId={id} index={index}>
			{(provided) => (
				<Wrapper
					{...provided.draggableProps}
					ref={provided.innerRef}
					{...provided.dragHandleProps}
				>
					<Container onClick={openElements}>
						<Text>{content}</Text>
					</Container>
					<Select isOpen={isSelectOpen}>
						<SelectItem Icon={TrashIcon} text="Delete" onClick={onRemove} />
						<SelectItem Icon={EditIcon} text="Edit" onClick={openTextarea} />
					</Select>
					<TasksTextarea
						isOpen={isTextareaOpen}
						onClose={closeTextarea}
						onSubmit={onChange}
						defaultValue={content}
					/>
				</Wrapper>
			)}
		</Draggable>
	);
};
