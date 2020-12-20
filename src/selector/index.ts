import { fetchActivity } from './../api/index';
import { sortTodoList } from './../controller/index';
import {
  todoListFilterState,
  todoListState,
  todoSortState,
  activityTypeState,
  refreshActivityState,
} from './../atoms/index';
import { selector } from 'recoil';
import { FILTER_STATE } from './../entity';
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

export const activitySelector = selector({
  key: 'activitySelector',
  get: async ({ get }) => {
    get(refreshActivityState);

    try {
      const activityType = get(activityTypeState);
      const response = await fetchActivity(activityType);

      return response.data;
    } catch (e) {
      throw e;
    }
  },
});
