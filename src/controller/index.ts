import { TodoListItem, FILTER_STATE } from './../entity/index';

export const deleteTodoItem = (list: TodoListItem[], targetId: string) => (
  list.filter(({ id }) => id !== targetId)
);

export const toggleTodoItem = (list: TodoListItem[], targetId: string) => (
  list.map((item) => (
    item.id === targetId
      ? { ...item, is_complete: !item.is_complete }
      : item
  ))
);

export const sortTodoList = (list: TodoListItem[], sortType: FILTER_STATE) => (
  [...list].sort((left, right) => (
    sortType === FILTER_STATE.NEW
      ? right.created_at - left.created_at
      : left.created_at - right.created_at
  ))
);

export const setAllItemsCompleted = (list: TodoListItem[]) => (
  list.map((item) => ({
    ...item,
    is_complete: true
  }))
);

export const filterCompleted = (list: TodoListItem[]) => (
  list.filter(({ is_complete }) => is_complete)
);

export const filterUncompleted = (list: TodoListItem[]) => (
  list.filter(({ is_complete }) => !is_complete)
);
