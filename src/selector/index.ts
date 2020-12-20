import { fetchActivity } from './../api/index';
import { sortTodoList } from './../controller/index';
import { todoListFilterState, todoListState, todoSortState, activityTypeState, activityState, refreshActivityState } from './../atoms/index';
import { DefaultValue, RecoilState, selector } from 'recoil';
import { FILTER_STATE } from './../entity';
import { filterCompleted, filterUncompleted } from '../controller';
import type { Activity } from '../entity/activity';

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

export const activitySelector: RecoilState<Activity> = selector({
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
  set: ({ set }, value) => {
    if (value instanceof DefaultValue) {
      set(activityState, v => v);
    }
  }
});
