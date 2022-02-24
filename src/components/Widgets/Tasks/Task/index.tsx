import { TaskI } from "@utils/types";
import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  font-size: 1.6rem;
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
}

export const Task: FC<TaskProps> = ({ content, id, index }) => {
	return (
		<Draggable draggableId={id} index={index}>
			{(provided) => (
				<Container
					{...provided.draggableProps}
					ref={provided.innerRef}
					{...provided.dragHandleProps}
				>
					<Text>{content}</Text>
				</Container>
			)}
		</Draggable>
	);
};
