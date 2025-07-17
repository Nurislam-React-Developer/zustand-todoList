'use client';

import React from 'react';
import useTodoStore from '@/store/todoStore';
import { useEffect, useState } from 'react';

export default function TodoList() {
	const { todos, fetchTodos, addTodo, deleteTodo, updateTodo, loading } =
		useTodoStore();
	const [newTodo, setNewTodo] = useState('');
	const [editTodoId, setEditTodoId] = useState<number | null>(null);
	const [editTodoTitle, setEditTodoTitle] = useState('');

	useEffect(() => {
		if (todos.length === 0) fetchTodos();
	}, []);

	const handleAdd = () => {
		if (newTodo.trim()) {
			addTodo(newTodo);
			setNewTodo('');
		}
	};

	const handleUpdate = (id: number) => {
		updateTodo(id, editTodoTitle);
		setEditTodoId(null);
		setEditTodoTitle('');
	};

	return (
		<div>
			<main className='p-4 max-w-xl mx-auto'>
				<h1 className='text-2xl font-bold mb-4'>📋 Мои задачи</h1>
				<div className='flex gap-2 mb-4'>
					<input
						type='text'
						value={newTodo}
						onChange={(e) => setNewTodo(e.target.value)}
						placeholder='Новая задача...'
						className='border p-2 w-full rounded'
					/>
					<button
						onClick={handleAdd}
						className='bg-blue-600 text-white px-4 py-2 rounded'
					>
						➕
					</button>
				</div>
				{loading && <p>Загрузка...</p>}
				<ul className='space-y-2'>
					{todos.map((todo) => (
						<li
							key={todo.id}
							className='flex justify-between items-center border p-2 rounded'
						>
							{editTodoId === todo.id ? (
								<input
									value={editTodoTitle}
									onChange={(e) => setEditTodoTitle(e.target.value)}
									className='border px-2 py-1 rounded w-full mr-2'
								/>
							) : (
								<span>{todo.title}</span>
							)}

							<div className='flex gap-2'>
								{editTodoId === todo.id ? (
									<button
										onClick={() => handleUpdate(todo.id)}
										className='text-green-600 font-bold'
									>
										✅
									</button>
								) : (
									<button
										onClick={() => {
											setEditTodoId(todo.id);
											setEditTodoTitle(todo.title);
										}}
										className='text-yellow-600'
									>
										✏️
									</button>
								)}
								<button
									onClick={() => deleteTodo(todo.id)}
									className='text-red-600'
								>
									🗑️
								</button>
							</div>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
}
