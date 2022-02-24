import { TaskColumnProps } from "./Column";

export const findElement = (id: string) => (v: TaskColumnProps) =>
	v.title === id;
export const replaceElement =
  (replacement: TaskColumnProps) => (column: TaskColumnProps) =>
  	replacement.title === column.title ? replacement : column;
