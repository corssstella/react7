import { create } from 'zustand';

const useLastTodo = create((set) => ({
    LastTodo: "",
    change: (newTodo) => set((state) => ({ LastTodo: state.LastTodo = newTodo})),
}))

export default useLastTodo;