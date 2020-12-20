import { ACTIVITY_TYPE } from './../entity/activity';
import { getSortStateFromStorage, getFilterStateFromStorage } from './../storage/index';
import { getTodoListFromStorage } from './../storage';
import { atom } from 'recoil';
import type { RecoilState } from 'recoil';
import type { TodoListItem } from './../entity';
import { activitySelector } from '../selector';

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
  default: activitySelector,
});

export const activityTypeState: RecoilState<ACTIVITY_TYPE> = atom({
  key: 'activityTypeState',
  default: '' as ACTIVITY_TYPE,
});

export const refreshActivityState = atom({
  key: 'refreshActivityState',
  default: 0,
});
