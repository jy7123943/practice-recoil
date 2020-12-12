export interface TodoListItem {
  id: string;
  todo: string;
  is_complete: boolean;
  created_at: number;
}

export enum SORT_STATE {
  NEW = 'new',
  OLD = 'old',
}

export enum FILTER_STATE {
  DEFAULT = 'default',
  COMPLETED = 'completed',
  UNCOMPLETED = 'uncompleted',
}
