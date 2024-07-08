<script>
  import Calculator from '$lib/components/pages/Calculator.svelte';
  import Titlescreen from '$lib/components/pages/TitleScreen.svelte';
  import {Screen}from '$lib/utils/store';
  import { fade } from 'svelte/transition';

</script>

<main>
  {#if $Screen === 'TitleScreen'}
  <div transition:fade>
    <Titlescreen />
  </div>
  {:else if $Screen === 'Calculator'}
  <div transition:fade>
    <Calculator/>
  </div>
  {/if}
</main>
