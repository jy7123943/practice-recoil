import { sortTodoList } from './../controller/index';
import { todoListFilterState, todoListState, todoSortState } from './../atoms/index';
import { selector } from 'recoil';
import { FILTER_STATE, SORT_STATE } from './../entity';
import { filterCompleted, filterUncompleted } from '../controller';

export const filteredTodoListSelector = selector({
  key: 'filteredTodoListSelector',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    const sortState = get(todoSortState);

    switch (filter) {
      case FILTER_STATE.COMPLETED:
        return sortTodoList(filterCompleted(list), sortState);
      case FILTER_STATE.UNCOMPLETED:
        return sortTodoList(filterUncompleted(list), sortState);
      default:
        return sortTodoList(list, sortState);
    }
  },
});
