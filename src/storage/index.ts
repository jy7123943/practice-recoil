import { SORT_STATE } from './../entity/index';
import { TodoListItem } from './../entity';

export enum STORAGE_KEY {
  TODO_LIST = 'todoList_key',
  SORT_STATE = 'sortState_key',
}

export const getItemFromStorage = <T>(
  key: string,
  defaultValue: T,
) => {
  const item = localStorage.getItem(key);

  return item ? JSON.parse(item): defaultValue;
};

export const saveItemInStorage = <T>(
  key: string,
  item: T,
) => {
  localStorage.setItem(key, JSON.stringify(item));

  return item;
};

export const saveTodoListInStorage = (list: TodoListItem[]): TodoListItem[] => (
  saveItemInStorage(STORAGE_KEY.TODO_LIST, list)
);

export const saveSortStateInStorage = (sortState: SORT_STATE): SORT_STATE => (
  saveItemInStorage(STORAGE_KEY.SORT_STATE, sortState)
);

export const getSortStateFromStorage = (): SORT_STATE => (
  getItemFromStorage(STORAGE_KEY.SORT_STATE, SORT_STATE.NEW)
);

export const getTodoListFromStorage = (): TodoListItem[] => (
  getItemFromStorage(STORAGE_KEY.TODO_LIST, [])
);
