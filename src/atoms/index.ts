import { getSortStateFromStorage, getFilterStateFromStorage } from './../storage/index';
import { getTodoListFromStorage } from './../storage';
import { atom } from 'recoil';
import type { RecoilState } from 'recoil';
import type { TodoListItem } from './../entity';
import type { Activity } from '../entity/activity';

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

export const activityState = atom({
  key: 'activityState',
  default: {} as Activity,
});

export const activityTypeState = atom({
  key: 'activityTypeState',
  default: undefined,
});

export const refreshActivityState = atom({
  key: 'refreshActivityState',
  default: 0,
});
