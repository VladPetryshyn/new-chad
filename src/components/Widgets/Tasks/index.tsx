import { useState } from "react";
import { defaultTasks } from "@utils/constants/widgets/defaults";
import styled from "styled-components";
import { TaskI } from "@utils/types";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { TaskColumn, TaskColumnProps } from "./Column";
import { findElement, replaceElement } from "./utils";
import { setLocalStorageItem } from "@utils/index";

const Wrapper = styled.div`
  position: relative;
`;

const Container = styled.div`
  display: flex;
`;

const localTasks = localStorage.getItem("tasks");

export type onAddT = (title: string) => (task: TaskI) => void;

export const TasksWidget = () => {
	const [tasks, setTasks] = useState<[TaskColumnProps]>(
		localTasks ? JSON.parse(localTasks) : defaultTasks,
	);

	const onDragEnd = ({ destination, source, type }: DropResult) => {
		if (!destination) return;

		if (
			destination.droppableId === source.droppableId &&
      destination.index === source.index
		)
			return;

		if (type === "column") {
			setTasks((prevTasks) => {
				const column = prevTasks.splice(source.index, 1);
				prevTasks.splice(destination.index, 0, ...column);

				setLocalStorageItem("tasks", prevTasks);

				return prevTasks;
			});
		} else {
			const home = tasks.find(findElement(source.droppableId));
			const foreign = tasks.find(findElement(destination.droppableId));

			if (home && foreign) {
				const newHomeTasks = [...home.tasks];
				const task = newHomeTasks.splice(source.index, 1);

				if (home.title !== foreign.title) {
					const newHome = {
						...home,
						tasks: newHomeTasks,
					};
					const newForeignTasks = [...foreign.tasks];
					newForeignTasks.splice(destination.index, 0, ...task);

					const newForeign = {
						...foreign,
						tasks: newForeignTasks,
					};

					setTasks((prevState) => {
						const newState = prevState
							.map(replaceElement(newHome))
							.map(replaceElement(newForeign)) as [TaskColumnProps];

						setLocalStorageItem("tasks", newState);

						return newState;
					});
				} else {
					newHomeTasks.splice(destination.index, 0, ...task);
					const newHome = {
						...home,
						tasks: newHomeTasks,
					};
					setTasks((prevState) => {
						const newState = prevState.map(replaceElement(newHome)) as [
              TaskColumnProps,
            ];

						setLocalStorageItem("tasks", newState);

						return newState;
					});
				}
			}
		}
	};

	const onAdd: onAddT = (title) => (task) => {
		setTasks((tasks) => {
			const newState = tasks.map((t) =>
				t.title === title ? { ...t, tasks: [...t.tasks, task] } : t,
			) as [TaskColumnProps];

			setLocalStorageItem("tasks", newState);

			return newState;
		});
	};

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
							{tasks.map((column, index) => (
								<TaskColumn
									{...column}
									key={column.title}
									index={index}
									onAdd={onAdd}
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
