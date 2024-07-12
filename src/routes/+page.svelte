<script>
  import Calculator from '$lib/components/pages/Calculator.svelte';
	import Score from '$lib/components/pages/Score.svelte';
  import Titlescreen from '$lib/components/pages/Title.svelte';
  import {Screen}from '$lib/utils/store';
  import { fade } from 'svelte/transition';

</script>

<main>
  {#if $Screen === 'Title'}
  <div transition:fade>
    <Titlescreen />
  </div>
  {:else if $Screen === 'Calculator'}
  <div transition:fade>
    <Calculator/>
  </div>
  {:else if $Screen === 'Score'}
  <div transition:fade>
   <Score/>
  </div>
  {/if}
</main>
