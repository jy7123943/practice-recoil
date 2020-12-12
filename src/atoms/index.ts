import { getSortStateFromStorage, getFilterStateFromStorage } from './../storage/index';
import { getTodoListFromStorage } from './../storage';
import { atom } from 'recoil';
import type { RecoilState } from 'recoil';
import type { TodoListItem } from './../entity';

export const todoTextState = atom({
  key: 'todoTextState',
  default: '',
});

export const todoListState: RecoilState<TodoListItem[]> = atom({
  key: 'todoListState',
  default: getTodoListFromStorage(),
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: getFilterStateFromStorage(),
});

export const todoSortState = atom({
  key: 'todoSortState',
  default: getSortStateFromStorage(),
});
