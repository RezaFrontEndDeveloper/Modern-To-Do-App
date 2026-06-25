import { create } from "zustand";
import { persist } from "zustand/middleware";
import { State } from "../types/types";
import { Todoinput } from "../types/types";

const todoStore = create<State>()(
  persist(
    (set) => ({
      todos: [],

      toggleTodo: (id, value) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: value } : todo
          ),
        })),

      addTodos: (item) => set((state) => ({ todos: [...state.todos, item] })),

      deleteItem: (id) =>
        set((state) => ({
          todos: state.todos.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "local",
      partialize: (state) => ({ todos: state.todos }),
    }
  )
);
export default todoStore;
