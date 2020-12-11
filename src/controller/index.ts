import { TodoListItem } from './../entity/index';

export const deleteTodoItem = (list: TodoListItem[], targetId: string) => (
  list.filter(({ id }) => id !== targetId)
);

export const toggleTodoItem = (list: TodoListItem[], targetId: string) => (
  list.map((item) => (
    item.id === targetId
      ? { ...item, is_done: !item.is_done }
      : item
  ))
);

export enum SORT_TYPE {
  NEW = 'new',
  OLD = 'old',
}

export const sortTodoList = (list: TodoListItem[], sortType: SORT_TYPE) => (
  [...list].sort((left, right) => (
    sortType === SORT_TYPE.NEW
      ? right.created_at - left.created_at
      : left.created_at - right.created_at
  ))
);

export const setAllItemsDone = (list: TodoListItem[]) => (
  list.map((item) => ({
    ...item,
    is_done: true
  }))
);
