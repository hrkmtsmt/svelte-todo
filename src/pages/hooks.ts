import { store } from '@src/store';
import { apiTodo } from '@src/api';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { Todo } from '@src/api';

export const hooks = () => {
  let newTodoTitle: string = '';
	
	let todo: Array<Todo> = [];
	
	store.todo.actions.subscribe((t) => {
		todo = t;
	})

	const handleClickAdd = async () => {
		await apiTodo.create({ title: newTodoTitle });
		newTodoTitle = '';

		const { todo: newTodo } = await apiTodo.read();
		
		if (!newTodo) {
			return;
		}

		store.todo.actions.set(newTodo);
	}
	
	const handleChangeChecked = async (todo: Todo) => {
		await apiTodo.update({ ...todo, isDone: !todo.isDone });

		const { todo: newTodo } = await apiTodo.read();

		if (!newTodo) {
			return;
		}

		store.todo.actions.set(newTodo);
	};
	
	const handleClickDelete = async (id: Todo['id']) => {
		await apiTodo.delete({ id });

		const { todo: newTodo } = await apiTodo.read();

		if (!newTodo) {
			return;
		}

		store.todo.actions.set(newTodo);
	}
	
	const handleChangeTitle: SvelteHTMLElements['input']['on:change'] = (e) => {
		newTodoTitle = e.currentTarget.value;
	}
	
  return {
    todo,
    newTodoTitle,
    handleChangeTitle,
    handleClickAdd,
    handleClickDelete,
    handleChangeChecked,
  }
}