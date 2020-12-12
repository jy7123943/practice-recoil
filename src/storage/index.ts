import { TodoListItem } from './../entity';
const STORAGE_KEY = 'todoList_key';

export const saveTodoListInStorage = (list: TodoListItem[]): TodoListItem[] => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));

  return list;
};

export const getTodoListFromStorage = (): TodoListItem[] => {
  const list = localStorage.getItem(STORAGE_KEY);

  return list ? JSON.parse(list) : [];
}
