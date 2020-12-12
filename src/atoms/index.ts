import { atom, selector } from 'recoil';
import type { RecoilState } from 'recoil';
import type { TodoListItem } from './../entity';
import { FILTER_STATE } from './../entity';
import { filterCompleted, filterUncompleted, sortTodoList } from '../controller';

export const todoTextState = atom({
  key: 'todoTextState',
  default: '',
});

export const todoListState: RecoilState<TodoListItem[]> = atom({
  key: 'todoListState',
  default: [] as TodoListItem[],
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: FILTER_STATE.DEFAULT,
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case FILTER_STATE.NEW:
        return sortTodoList(list, FILTER_STATE.NEW);
      case FILTER_STATE.OLD:
        return sortTodoList(list, FILTER_STATE.OLD);
      case FILTER_STATE.COMPLETED:
        return filterCompleted(list);
      case FILTER_STATE.UNCOMPLETED:
        return filterUncompleted(list);
      default:
        return list;
    }
  },
});
