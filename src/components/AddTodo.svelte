<script lang='ts'>
  import { css } from "@styled-system/css";
	import type { SvelteHTMLElements } from "svelte/elements";
  
  export let newTodoTitle: string;
  export let onChangeTitle: SvelteHTMLElements['input']['on:change'];
  export let onClickAdd: () => Promise<void>;
</script>

<div
  class={css({
    width: 'full',
    display: 'flex',
    gap: '8px'
  })}
>
  <input
    type="text"
    class={css({
      border: 'solid 1px #606060',
      borderRadius: '8px'
    })}
    bind:value={newTodoTitle}
    on:change={onChangeTitle}
  />
  <button
    type='button'
    on:click={onClickAdd}
    class={css({
      cursor: 'pointer',
      fontWeight: 700,
      color: '#FFF',
      backgroundColor: '#206FFF',
      borderRadius: '8px',
      padding: '8px'
    })}
  >
    Add
  </button>
</div>