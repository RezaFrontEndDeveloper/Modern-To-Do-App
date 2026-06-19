import { create } from "zustand";

const todoStore = create((set) => ({
  todos: [],

  toggleTodo: (id, value) =>
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? { ...todo, isDone: value } : todo)),
    })),

  addTodos: (item) => set((state) => ({ todos: [...state.todos, item] })),
  deleteItem: (id) => set((state) => ({ todos: state.todos.filter((item) => item.id !== id) })),
}));
export default todoStore;
