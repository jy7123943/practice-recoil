import { atom } from 'recoil';
import type { RecoilState } from 'recoil';
import type { TodoListItem } from './../entity/index';

export const todoTextState = atom({
  key: 'todoTextState',
  default: '',
});

export const todoListState: RecoilState<TodoListItem[]> = atom({
  key: 'todoListState',
  default: [] as TodoListItem[],
});
