<script lang="ts">
  import { onMount } from 'svelte';
  import Display from '../parts/Display.svelte';
  import Problem from '../parts/Problem.svelte';
  import ArithmeticSelector from '../parts/ArithmeticSelector.svelte';
  import Numpad from '../parts/Numpad.svelte';
  import { generateProblem } from '$lib/utils/generateProblem';
  import {get} from 'svelte/store'
  import {difficulty as StoreDifficult, operations as StoreOperations, Screen as StoreScreen} from '$lib/utils/store' 
	import BackButton from '../parts/BackButton.svelte';

  let inputValue = '';
  let currentProblem = '';
  let correctAnswer = '';
  let difficulty = get(StoreDifficult);
  let selectedOperations = get(StoreOperations);

  function updateProblem() {
    const { problem, answer } = generateProblem(difficulty, selectedOperations);
    currentProblem = problem;
    correctAnswer = answer;
    inputValue = "";
  }

  onMount(() => {
    updateProblem();
  });


  //数値入力時の処理
  const handleInputChange = (event) => {
    inputValue = event.detail;
  };

  //回答時の処理
  const handleSubmit = (event) => {
    checkAnswer(event.detail, correctAnswer);
  };

  const checkAnswer = (answer, correct) => {
    if(answer === correct){
      console.log("correct");
      updateProblem();
    } else {
      console.log("false");
    }
  } 

</script>

<div>

  <BackButton on:click={() => {StoreScreen.setScreen("TitleScreen")}}></BackButton>
  <div class="flex flex-col items-center justify-center h-screen ">
    <div class="text-5xl mb-5 flex flex-wrap sm:flex-row items-center justify-center">
      <div  class="flex">
      <Problem {currentProblem} />
        &nbsp;=&nbsp;
      </div>
      <Display currentInput={inputValue} />
    </div>
    <Numpad on:input={handleInputChange} on:submit={handleSubmit} inputValue={inputValue}/>
  </div>
</div>



