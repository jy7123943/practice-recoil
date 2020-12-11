import { atom } from 'recoil';

export const todoTextState = atom({
  key: 'todoTextState',
  default: '',
});

export const todoListState = atom({
  key: 'todoListState',
  default: [
    {
      id: 0,
      todo: '장보기',
      is_done: false,
      created_at: new Date().getTime(),
    }
  ],
});
