import { create } from "zustand";

export const useTodosStore = create((set) => ({
  todos: [],
  addTodos: (todo) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: 1,
          ...todo,
        },
      ],
    })),
}));
