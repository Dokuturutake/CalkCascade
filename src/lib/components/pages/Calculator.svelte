<script lang="ts">
  import { onMount } from 'svelte';
  import Display from '../parts/Display.svelte';
  import Problem from '../parts/Problem.svelte';
  import ArithmeticSelector from '../parts/ArithmeticSelector.svelte';
  import Numpad from '../parts/Numpad.svelte';
  import { generateProblem } from '$lib/utils/generateProblem';
  import {get} from 'svelte/store'
  import {ResultsList, difficulty as StoreDifficult, operations as StoreOperations, Screen as StoreScreen} from '$lib/utils/store' 
	import BackButton from '../parts/BackButton.svelte';
	import type { IQuestion } from '$lib/interfaces/Question';
	import { text } from '@sveltejs/kit';
	import type { IResults } from '$lib/interfaces/Results';
	import type { IResult } from '$lib/interfaces/Result';

  let inputValue = '';
  let currentQuestion:IQuestion = {text:'', answer:''};
  let difficulty = get(StoreDifficult);
  let selectedOperations = get(StoreOperations);
  let currentResults:IResult[] = [];
  let startTime = Date.now(), stopTime = Date.now();
  let isCorrect = true;
  let timeLimit = 20000;

  function updateProblem() {
    const { problem, answer } = generateProblem(difficulty, selectedOperations);
    currentQuestion = {text:problem, answer:answer}
    inputValue = "";
    startTime = Date.now();
    isCorrect = true;
  }

  onMount(() => {
    updateProblem();
    setTimeout(() => {
      const Results :IResults = {
        results:currentResults,
        difficultyLevel: difficulty,
        timeLimit: timeLimit,
      };

      $ResultsList.push(Results);

      StoreScreen.set("Score");
    }, timeLimit);
  });


  //数値入力時の処理
  const handleInputChange = (event) => {
    inputValue = event.detail;
  };

  //回答時の処理
  const handleSubmit = (event) => {
    checkAnswer(event.detail, currentQuestion.answer);
  };

  const checkAnswer = (answer, correct) => {
    if(answer === correct){
      console.log("correct");
      stopTime = Date.now();
      const elapsedTime = stopTime - startTime;
      let result : IResult = {
        question: currentQuestion, 
        userAnswer:answer, 
        isCorrect:isCorrect,
        timeTaken: elapsedTime,
      }
      currentResults.push(result);
      updateProblem();
    } else {
      console.log("false");
      isCorrect = false;
    }
  } 

</script>

<div>

  <BackButton on:click={() => {StoreScreen.set("Title")}}></BackButton>
  <div class="flex flex-col items-center justify-center h-screen ">
    <div class="text-5xl mb-5 flex flex-wrap sm:flex-row items-center justify-center">
      <div  class="flex">
      <Problem currentProblem={currentQuestion.text} />
        &nbsp;=&nbsp;
      </div>
      <Display currentInput={inputValue} />
    </div>
    <Numpad on:input={handleInputChange} on:submit={handleSubmit} inputValue={inputValue}/>
  </div>
</div>



