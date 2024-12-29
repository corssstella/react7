import { create } from 'zustand';

const useTodoList = create((set) => ({
    todos: [],
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    setTodos: (newTodos) => set(() => ({ todos: newTodos })),
}));

export default useTodoList;