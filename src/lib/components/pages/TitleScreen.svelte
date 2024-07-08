<script>
  import {Screen, operations, difficulty} from '$lib/utils/store';
  import ArithmeticSelector from '../parts/ArithmeticSelector.svelte';
  import {get} from 'svelte/store'

  function startGame(event) {
    Screen.setScreen("Calculator");
  }

  const handleSelectionChange = (event) => {
    operations.setOperations(event.detail);
  };

  let rangeValue = get(difficulty);
  let selectedOperation = get(operations)

  $: difficulty.setDifficulty(rangeValue);
</script>

<div class="flex flex-col items-center justify-center h-screen">
  <h1 class="text-5xl font-bold mb-5">Calc Cascade</h1>
  <button class="btn btn-primary mb-5" on:click={startGame}>Start Game</button>

  <ArithmeticSelector
    bind:selectedOperations={selectedOperation}
    on:change={handleSelectionChange}
  />

  <div class="flex space-x-4 w-3/4 mt-5">
    <div class="text-l">
      LV: 
    </div>
    <input type="range" bind:value={rangeValue} min="1" max="5" step="1" class="range range-accent" />
  </div>
</div>
