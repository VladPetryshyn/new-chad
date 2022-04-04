import { useState } from "react";
import { defaultTasks } from "@utils/constants/widgets/defaults";
import { findElement, replaceElement } from "./utils";
import { setLocalStorageItem } from "@utils/index";
import { TaskColumnProps } from "./Column";
import { DefaultWidgetProps, onAddT, onRemoveT } from "../types";
import { DropResult } from "react-beautiful-dnd";
import { editContentT, onChangeT } from "../types";

const localTasks = localStorage.getItem("tasks");

export const useTasksWidget = ({ isPreview }: DefaultWidgetProps) => {
	const Tasks =
    localTasks && !isPreview ? JSON.parse(localTasks) : defaultTasks;
	const [tasks, setTasks] = useState<[TaskColumnProps]>(Tasks);

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

	const onAdd: editContentT<onAddT> = (title) => (task) => {
		setTasks((tasks) => {
			const newState = tasks.map((t) =>
				t.title === title ? { ...t, tasks: [...t.tasks, task] } : t,
			) as [TaskColumnProps];

			setLocalStorageItem("tasks", newState);

			return newState;
		});
	};

	const onRemove: editContentT<onRemoveT> = (title) => (id) => () => {
		setTasks((tasks) => {
			const newState = tasks.map((t) =>
				t.title === title
					? { ...t, tasks: t.tasks.filter((h) => h.id !== id) }
					: t,
			) as [TaskColumnProps];

			setLocalStorageItem("tasks", newState);

			return newState;
		});
	};

	const onDeleteAll: editContentT<() => void> = (title) => () => {
		setTasks((tasks) => {
			const newState = tasks.map((t) =>
				t.title === title ? { ...t, tasks: [] } : t,
			) as [TaskColumnProps];

			setLocalStorageItem("tasks", newState);

			return newState;
		});
	};

	const onChangeTask: editContentT<onChangeT> = (title) => (id) => (text) => {
		setTasks((columns) => {
			const newState = columns.map((c) =>
				c.title === title
					? {
						...c,
						tasks: c.tasks.map((tsk) =>
							tsk.id === id ? { ...tsk, content: text } : tsk,
						),
					}
					: c,
			) as [TaskColumnProps];

			setLocalStorageItem("tasks", newState);

			return newState;
		});
	};

	return { onChangeTask, onDragEnd, onAdd, onRemove, onDeleteAll, tasks };
};
