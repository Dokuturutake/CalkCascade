<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';

  const dispatch = createEventDispatcher();
  
  export let inputValue = '';
  
  const addNumber = (number) => {
    inputValue += number;
    dispatch('input', inputValue);
  };

  const removeLast = () => {
    inputValue = inputValue.slice(0, -1);
    dispatch('input', inputValue);
  };

  const submit = () => {
    dispatch('submit', inputValue);
  };

  const handleKeydown = (event) => {
    if (event.key >= '0' && event.key <= '9') {
      addNumber(event.key);
    } else if (event.key === 'Backspace') {
      removeLast();
    } else if (event.key === 'Enter') {
      event.preventDefault(); // フォームのデフォルト動作を阻止
      submit();
    }
  };

  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeydown);
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', handleKeydown);
    }
  });

</script>

<style>
  .numpad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  button:focus{
    outline: none;
    box-shadow: none;
  }
</style>

<div class="numpad">
  {#each [ 7, 8, 9, 4, 6, 7, 1, 2, 3, 0] as number}
    <button class="btn-square btn btn-outline btn-lg" 
     on:click={() => addNumber(number.toString())}>
      {number}
    </button>
  {/each}
  <button class="btn-square btn btn-outline btn-lg" on:click={removeLast}>
    ←
  </button>
  <button class="btn-square btn btn-outline btn-lg" on:click={submit}>
    =
  </button>
</div>
