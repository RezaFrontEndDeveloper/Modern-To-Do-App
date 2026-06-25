export interface Todoinput {
  id: string;
  work: string;
  isDone: boolean;
}

export interface State {
  todos: Input[];
  toggleTodo: (id: string, value: boolean) => void;
  addTodos: (item: Input) => void;
  deleteItem: (id: string) => void;
}
