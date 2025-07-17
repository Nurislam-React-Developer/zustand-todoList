import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

interface TodoState {
	todos: Todo[];
	loading: boolean;
	fetchTodos: () => Promise<void>;
	addTodo: (title: string) => Promise<void>;
	deleteTodo: (id: number) => Promise<void>;
	updateTodo: (id: number, updatedTitle: string) => Promise<void>;
}

const API_URL = 'https://b5dee412c8184c50.mokky.dev/todos';

const useTodoStore = create<TodoState>()(
	persist(
		(set, get) => ({
			todos: [],
			loading: false,

			fetchTodos: async () => {
				set({ loading: true });
				const res = await axios.get(API_URL);
				set({ todos: res.data, loading: false });
			},

			addTodo: async (title: string) => {
				set({ loading: true });
				const res = await axios.post(API_URL, {
					title,
					completed: false,
				});
				set({ todos: [res.data, ...get().todos], loading: false });
			},

			deleteTodo: async (id: number) => {
				try {
          set({ loading: true });
					await axios.delete(`${API_URL}/${id}`);
					set({ todos: get().todos.filter((todo) => todo.id !== id) , loading: false });
				} catch (error) {
					console.error(`Failed to delete todo with id ${id}:`, error);
					alert('Ошибка при удалении задачи. Возможно, задача уже удалена.');
				}
			},

			updateTodo: async (id: number, updatedTitle: string) => {
        set({ loading: true });
				const res = await axios.patch(`${API_URL}/${id}`, {
					title: updatedTitle,
				});

				set({
					todos: get().todos.map((todo) =>
						todo.id === id ? { ...todo, title: res.data.title } : todo
					),
          loading: false,
				});
			},
		}),
		{
			name: 'todo-storage',
			partialize: (state) => ({
				todos: state.todos,
			}),
		}
	)
);

export default useTodoStore;
