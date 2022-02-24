import { IconsListKeys } from "./iconList";

export enum Widgets {
  clock = "Clock",
  search = "Search",
  bookmarks = "Bookmarks",
  tasks = "Tasks",
}

export interface SearchItemI {
  id: string;
  icon: IconsListKeys;
  link: string;
}

export interface LinkItemI extends SearchItemI {
  name: string;
}
export interface TaskI {
  content: string;
  id: string;
}
