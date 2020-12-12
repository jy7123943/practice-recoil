import { todoListFilterState, todoListState } from './../atoms/index';
import { selector } from 'recoil';
import { FILTER_STATE } from './../entity';
import { filterCompleted, filterUncompleted } from '../controller';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case FILTER_STATE.COMPLETED:
        return filterCompleted(list);
      case FILTER_STATE.UNCOMPLETED:
        return filterUncompleted(list);
      default:
        return list;
    }
  },
});
