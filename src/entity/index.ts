export interface TodoListItem {
  id: string;
  todo: string;
  is_done: boolean;
  created_at: number;
}

export enum FILTER_STATE {
  DEFAULT = 'default',
  NEW = 'new',
  OLD = 'old',
}
