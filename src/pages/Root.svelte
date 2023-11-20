<script lang="ts">
	import Item from '@src/components/Item.svelte';
	import AddTodo from '@src/components/AddTodo.svelte'
	import { apiTodo, type Todo } from '@src/api';
	import { store } from '@src/store';
	import type { SvelteHTMLElements } from 'svelte/elements';
	
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
</script>

<AddTodo
	newTodoTitle={newTodoTitle}
	onChangeTitle={handleChangeTitle}
	onClickAdd={handleClickAdd}
/>
<div>
	{#each todo as item}
		<Item
			title={item.title}
			isDone={item.isDone}
			onChange={() => handleChangeChecked(item)}
			onClick={() => handleClickDelete(item.id)}
		/>
	{/each}
</div>
