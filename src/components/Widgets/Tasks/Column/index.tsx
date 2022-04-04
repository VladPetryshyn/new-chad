import { FC } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { onAddT, onChangeT, onRemoveT } from "../../types";
import { Task, TaskProps } from "../Task";
import { PlusForm } from "./AddTask";
import { TasksColumnHeaderDeleteAllIcon } from "./DeleteAllTasks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(p) => p.theme.bg}CC;
  backdrop-filter: blur(5px);
  min-height: 30em;
  min-width: 25em;
  max-width: 25em;
  border-radius: 2em;
  padding: 1em 0;
  margin-left: 0.7em;
  margin-right: 0.7em;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1.5px solid ${(p) => p.theme.fg};
  padding: 0px 1em 0.7em 1em;
  padding-bottom: 0.7em;
`;

const Title = styled.h3`
  text-transform: uppercase;
  text-align: center;
  font-size: 2em;
`;
const Content = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export interface TaskColumnProps {
  title: string;
  tasks: Array<TaskProps>;
  onAdd: onAddT;
  onRemove: onRemoveT;
  onDeleteAll: () => void;
  onChangeTask: onChangeT;
}

interface Props extends TaskColumnProps {
  index: number;
}

export const TaskColumn: FC<Props> = ({
	title,
	tasks,
	index,
	onAdd,
	onRemove,
	onDeleteAll,
	onChangeTask,
}) => {
	return (
		<Draggable draggableId={title} index={index}>
			{(provided) => (
				<Container {...provided.draggableProps} ref={provided.innerRef}>
					<Head>
						<PlusForm onAdd={onAdd} />
						<Title {...provided.dragHandleProps}>{title}</Title>
						<TasksColumnHeaderDeleteAllIcon onClick={onDeleteAll} />
					</Head>
					<Droppable droppableId={title} type="task">
						{(provided) => (
							<Content ref={provided.innerRef} {...provided.droppableProps}>
								{tasks.map(({ id, ...task }, index) => (
									<Task
										{...task}
										index={index}
										id={id}
										key={id}
										onRemove={onRemove(id)}
										onChange={onChangeTask(id)}
									/>
								))}
								{provided.placeholder}
							</Content>
						)}
					</Droppable>
				</Container>
			)}
		</Draggable>
	);
};
