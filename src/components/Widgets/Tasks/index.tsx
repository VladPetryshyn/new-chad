import { FC } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { TaskColumn } from "./Column";
import { DefaultWidgetProps } from "../types";
import { useTasksWidget } from "./hook";

const Wrapper = styled.div`
  // position: relative;
`;

const Container = styled.div`
  display: flex;
`;

export const TasksWidget: FC<DefaultWidgetProps> = (props) => {
	const { onDragEnd, tasks, onAdd, onRemove, onDeleteAll, onChangeTask } =
    useTasksWidget(props);

	return (
		<Wrapper>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable
					droppableId="all-columns"
					direction="horizontal"
					type="column"
				>
					{(provided) => (
						<Container {...provided.droppableProps} ref={provided.innerRef}>
							{tasks.map(({ title, ...column }, index) => (
								<TaskColumn
									{...column}
									title={title}
									key={title}
									index={index}
									onAdd={onAdd(title)}
									onRemove={onRemove(title)}
									onDeleteAll={onDeleteAll(title)}
									onChangeTask={onChangeTask(title)}
								/>
							))}
							{provided.placeholder}
						</Container>
					)}
				</Droppable>
			</DragDropContext>
		</Wrapper>
	);
};
