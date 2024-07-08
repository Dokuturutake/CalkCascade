<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  
  // 初期の選択状態
  export let selectedOperations = ['+', '-', '*', '/'];
  export let operations = ['+', '-', '*', '/'];

  // 最低1つの演算子が選択されていることを確認する関数
  const toggleOperation = (operation) => {
    if (selectedOperations.includes(operation)) {
      if (selectedOperations.length > 1) {
        selectedOperations = selectedOperations.filter(op => op !== operation);
      }
    } else {
      selectedOperations = [...selectedOperations, operation];
    }
    dispatch('change', selectedOperations);
  };

  function replaceOperators(str) {
  return str.replace(/\*/g, '×').replace(/\//g, '÷');
}
</script>

<div>
  {#each operations as operation}
    <span
      class="btn-square btn btn-outline"
      class:btn-secondary={!selectedOperations.includes(operation)}
      role="button"
      tabindex="0"
      on:click={() => toggleOperation(operation)}
      on:keydown={(e) => e.key === 'Enter' && toggleOperation(operation)}
    >
      {replaceOperators(operation)}
    </span>
  {/each}
</div>

