<script lang="ts">
	import type { IResult } from "$lib/interfaces/Result";
	import type { IResults } from "$lib/interfaces/Results";
	import { ResultsList, Screen } from "$lib/utils/store";
  import {get} from "svelte/store"


  let latestResults = $ResultsList[$ResultsList.length - 1];
  console.log(latestResults);
  
  let latestResult : IResult[] = latestResults.results;
  console.log(latestResult);

  let level: number = latestResults.difficultyLevel;
  let time: number = latestResults.timeLimit / 1000;
  let score: number = latestResult.length;
  let questionsPerSecond: number = time/score;

  function sumProperty<T>(arr: T[], propertyName: keyof T): number {
  return arr.reduce((sum, item) => sum + (item as any)[propertyName], 0);
  }

  function restart() {
    Screen.set("Calculator")
    console.log("Restart clicked");
  }

  function top() {
    // トップに戻る処理をここに実装
    Screen.set("Title")
    console.log("Top clicked");
  }
</script>

<style>
  .container {
    @apply flex flex-col items-center justify-center h-screen;
  }
  .button {
    @apply btn btn-primary m-2;
  }
</style>

<div class="container">
  <div class="text-3xl font-bold mb-4">
    Lv{level} : {time}s
  </div>
  <div class="text-2xl mb-2">
    Score: {score} questions
  </div>
  <div class="text-xl mb-4">
    q/s: {questionsPerSecond.toFixed(2)}
  </div>
  <button class="button" on:click={restart}>Restart</button>
  <button class="button" on:click={top}>Top</button>
</div>