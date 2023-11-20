<script lang="ts">
	import Root from '@src/pages/Root.svelte'
	import { useGlobalState } from '@src/utils/useState.client';
	import { css } from '@styled-system/css';
	
	const [count, setCount] = useGlobalState<number>(2);
</script>

<button
	type="button"
	on:click={() => setCount((prev) => prev * 2)}
	class={css({
		padding: '10px',
		backgroundColor: '#909090',
		cursor: 'pointer'
	})}
>
	{$count}
</button>

<Root />
