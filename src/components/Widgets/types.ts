import { TaskI } from "@utils/types";

export interface DefaultWidgetProps {
  isPreview?: boolean;
}

export type editContentT<T> = (title: string) => T;
export type onAddT = (task: TaskI) => void;
export type onRemoveT = (task: string) => () => void;
export type onChangeT = (id: string) => (text: string) => void;
