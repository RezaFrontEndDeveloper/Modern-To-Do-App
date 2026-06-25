export interface Todoinput {
  id: string;
  work: string;
  isDone: boolean;
}

export interface State {
  todos: Todoinput[];
  toggleTodo: (id: string, value: boolean) => void;
  addTodos: (item: Todoinput) => void;
  deleteItem: (id: string) => void;
}
