<script lang="ts">
	import { css } from "@styled-system/css";
	import type { Todo } from "@src/api";
	
  export let title: Todo['title'];
  export let isDone: Todo['isDone'];
  export let onChange: (todo: Todo) => Promise<void>;
  export let onClick: (id: Todo['id']) => Promise<void>;
</script>

<div class={css({
  width: 'full',
  padding: '10px', 
  border: 'solid 1px #404040',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px'
})}>
  <div>
    <input type="checkbox" bind:checked={isDone} on:change={onChange} />
    <span>{title}<span>
  </div>
  <button
    type="button"
    class={css({
      backgroundColor: '#EEEEEE',
      borderRadius: '8px',
      padding: '8px',
      cursor: 'pointer'
    })}
    on:click={onClick}
  >
    Delete
  </button>
</div>